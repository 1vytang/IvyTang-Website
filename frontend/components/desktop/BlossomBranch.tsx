/**
 * A cherry-blossom branch reaching in from the top-right corner.
 *
 * The branch and twigs are tapered shapes built from bezier centre-lines, and the
 * blossoms are scattered along them in hanging clusters. A seeded random generator
 * gives every flower its own size, angle and shade while keeping the drawing
 * identical on the server and in the browser.
 */

const INK = "#4a3a2e";

type Pt = [number, number];
type Seg = [Pt, Pt, Pt, Pt];

/* ---------- geometry helpers ---------- */

function bezier([p0, p1, p2, p3]: Seg, t: number): Pt {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]];
}

/** Points along a chain of bezier segments. */
function sample(segs: Seg[], steps = 22): Pt[] {
  const pts: Pt[] = [];
  segs.forEach((s, i) => {
    for (let k = i === 0 ? 0 : 1; k <= steps; k++) pts.push(bezier(s, k / steps));
  });
  return pts;
}

/** Point at fraction u (0–1) along a chain of segments. */
function pointAt(segs: Seg[], u: number): Pt {
  const n = segs.length;
  const i = Math.min(Math.floor(u * n), n - 1);
  return bezier(segs[i], u * n - i);
}

const f = (p: Pt) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`;

/** Offset each point along its normal; `width(i)` gives the offset distance. */
function offsets(pts: Pt[], width: (i: number) => number, side: 1 | -1): Pt[] {
  return pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const len = Math.hypot(dx, dy) || 1;
    const w = width(i) * side;
    return [p[0] - (dy / len) * w, p[1] + (dx / len) * w];
  });
}

/** A filled outline that tapers from width w0 to w1. */
function taper(segs: Seg[], w0: number, w1: number): string {
  const pts = sample(segs);
  const w = (i: number) => (w0 + (w1 - w0) * (i / (pts.length - 1))) / 2;
  const left = offsets(pts, w, 1);
  const right = offsets(pts, w, -1).reverse();
  return `M${left.map(f).join("L")}L${right.map(f).join("L")}Z`;
}

/** A thin highlight line running along the upper side of a branch. */
function highlight(segs: Seg[], w0: number, w1: number): string {
  const pts = sample(segs);
  const line = offsets(pts, (i) => ((w0 + (w1 - w0) * (i / (pts.length - 1))) / 2) * 0.45, 1);
  return `M${line.map(f).join("L")}`;
}

function rng(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- the branch ---------- */

const MAIN: Seg[] = [
  [[912, 10], [840, 18], [770, 38], [700, 52]],
  [[700, 52], [620, 68], [520, 60], [430, 80]],
  [[430, 80], [340, 100], [250, 92], [150, 114]],
];

// twigs: start on the main branch and taper to a point
const TWIGS: { segs: Seg[]; w0: number }[] = [
  { segs: [[[805, 26], [818, 52], [834, 70], [856, 94]]], w0: 6 },
  { segs: [[[742, 42], [736, 26], [722, 14], [700, 8]]], w0: 4.5 },
  { segs: [[[688, 55], [698, 80], [704, 96], [724, 114]]], w0: 5 },
  { segs: [[[606, 64], [594, 46], [578, 34], [556, 26]]], w0: 4.5 },
  { segs: [[[522, 62], [532, 84], [538, 102], [552, 124]]], w0: 4.5 },
  { segs: [[[404, 86], [398, 106], [388, 120], [372, 136]]], w0: 4 },
  { segs: [[[330, 96], [318, 78], [304, 68], [284, 62]]], w0: 3.5 },
  { segs: [[[238, 98], [232, 114], [222, 126], [206, 138]]], w0: 3 },
];

// [branch index (-1 = main), position along it, flowers in the cluster]
const CLUSTERS: [number, number, number][] = [
  [-1, 0.08, 3], [-1, 0.16, 2], [-1, 0.27, 4], [-1, 0.36, 2], [-1, 0.45, 3], [-1, 0.54, 2], [-1, 0.63, 3],
  [-1, 0.72, 2], [-1, 0.8, 3], [-1, 0.88, 2], [-1, 0.97, 2],
  [0, 0.55, 2], [0, 1, 4], [1, 0.6, 2], [1, 1, 3], [2, 0.5, 2], [2, 1, 4], [3, 0.55, 2], [3, 1, 3],
  [4, 0.5, 2], [4, 1, 3], [5, 0.6, 2], [5, 1, 3], [6, 1, 3], [7, 1, 2],
];

const PETAL = "M0 0C-6.5-3-8.5-10.5-5.2-16L-1.6-13.6L0-16.8L1.6-13.6L5.2-16C8.5-10.5 6.5-3 0 0Z";
const LEAF = "M0 0C5-6 5.5-15 0-22C-5.5-15-5-6 0 0Z";
const SHADES = ["#fbeee9", "#f6dcd5", "#f1cfc6", "#ecc0b5", "#f8e4de"];

type Bloom =
  | { kind: "full"; x: number; y: number; s: number; r: number; color: string; petals: [number, number][] }
  | { kind: "half" | "bud"; x: number; y: number; s: number; r: number; color: string };
type Leaf = { x: number; y: number; s: number; r: number; color: string };
type Stem = { from: Pt; to: Pt; bend: Pt };

function grow() {
  const rand = rng(20261118);
  const between = (lo: number, hi: number) => lo + rand() * (hi - lo);
  const blooms: Bloom[] = [];
  const leaves: Leaf[] = [];
  const stems: Stem[] = [];

  for (const [b, u, count] of CLUSTERS) {
    const anchor = pointAt(b < 0 ? MAIN : TWIGS[b].segs, u);

    // a young leaf or two at some clusters
    const leafCount = rand() < 0.45 ? 1 + Math.round(rand()) : 0;
    for (let i = 0; i < leafCount; i++) {
      const ang = between(-200, 20);
      leaves.push({ x: anchor[0], y: anchor[1], s: between(0.6, 0.95), r: ang + 90, color: rand() < 0.5 ? "#a3b48f" : "#b88a62" });
    }

    for (let i = 0; i < count; i++) {
      // flowers mostly hang below the branch, a few stand up
      const theta = between(-0.25 * Math.PI, 1.25 * Math.PI);
      const dist = between(9, 22);
      const x = anchor[0] + Math.cos(theta) * dist;
      const y = anchor[1] + Math.sin(theta) * dist;
      const deg = (theta * 180) / Math.PI;
      const bend: Pt = [(anchor[0] + x) / 2 + between(-4, 4), (anchor[1] + y) / 2 + between(-2, 4)];
      stems.push({ from: anchor, to: [x, y], bend });

      const roll = rand();
      const color = SHADES[Math.floor(rand() * SHADES.length)];
      if (roll < 0.64) {
        const petals: [number, number][] = Array.from({ length: 5 }, (_, k) => [k * 72 + between(-7, 7), between(0.88, 1.08)]);
        blooms.push({ kind: "full", x, y, s: between(0.58, 1.02), r: between(0, 72), color, petals });
      } else if (roll < 0.83) {
        blooms.push({ kind: "half", x, y, s: between(0.6, 0.85), r: deg + 90, color });
      } else {
        blooms.push({ kind: "bud", x, y, s: between(0.7, 1), r: deg + 90, color: "#e7aaa4" });
      }
    }
  }
  // draw buds and half-open flowers behind the full blooms
  blooms.sort((a, b) => (a.kind === "full" ? 1 : 0) - (b.kind === "full" ? 1 : 0));
  return { blooms, leaves, stems };
}

const { blooms, leaves, stems } = grow();
const KNOTS: [number, number][] = [[0.22, 4], [0.47, 3.2], [0.71, 2.6]];

const hair = { vectorEffect: "non-scaling-stroke" } as const;

function FullBloom({ b }: { b: Extract<Bloom, { kind: "full" }> }) {
  return (
    <g transform={`translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) rotate(${b.r.toFixed(1)}) scale(${b.s.toFixed(2)})`}>
      {b.petals.map(([rot, sc], k) => (
        <path key={k} d={PETAL} fill={b.color} stroke={INK} strokeOpacity="0.6" strokeWidth="1" {...hair} transform={`rotate(${rot.toFixed(1)}) scale(${sc.toFixed(2)})`} />
      ))}
      <circle r="5.5" fill="#e39a95" opacity="0.4" />
      {[0, 51, 103, 154, 206, 257, 309].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x = Math.cos(rad) * 6.5, y = Math.sin(rad) * 6.5;
        return (
          <g key={a}>
            <line x1="0" y1="0" x2={x.toFixed(1)} y2={y.toFixed(1)} stroke="#c97f72" strokeWidth="0.8" {...hair} />
            <circle cx={x.toFixed(1)} cy={y.toFixed(1)} r="1.1" fill="#d9aa55" />
          </g>
        );
      })}
    </g>
  );
}

function HalfBloom({ b }: { b: Bloom }) {
  return (
    <g transform={`translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) rotate(${b.r.toFixed(1)}) scale(${b.s.toFixed(2)})`}>
      {[-34, 34, 0].map((rot) => (
        <path key={rot} d={PETAL} fill={b.color} stroke={INK} strokeOpacity="0.6" strokeWidth="1" {...hair} transform={`translate(0 3) rotate(${rot}) scale(0.72 0.82)`} />
      ))}
      <path d="M-4 2Q0 10 4 2Q0 4.5-4 2Z" fill="#9c5246" stroke={INK} strokeOpacity="0.6" strokeWidth="0.8" {...hair} />
    </g>
  );
}

function Bud({ b }: { b: Bloom }) {
  return (
    <g transform={`translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) rotate(${b.r.toFixed(1)}) scale(${b.s.toFixed(2)})`}>
      <path d="M0 0C-5-3-5-11 0-15C5-11 5-3 0 0Z" fill={b.color} stroke={INK} strokeOpacity="0.6" strokeWidth="1" {...hair} />
      <path d="M-4 1L-1.5-4L0 0L1.5-4L4 1Q0 4-4 1Z" fill="#9c5246" stroke={INK} strokeOpacity="0.6" strokeWidth="0.8" {...hair} />
    </g>
  );
}

export default function BlossomBranch({ children }: { children?: React.ReactNode }) {
  return (
    <svg className="deco deco-branch" viewBox="0 0 900 170" preserveAspectRatio="xMaxYMin meet">
      <defs>
        <linearGradient id="bark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7d6049" />
          <stop offset="1" stopColor="#56412f" />
        </linearGradient>
      </defs>

      {/* twigs behind the main branch */}
      {TWIGS.map((t, i) => (
        <path key={i} d={taper(t.segs, t.w0, 0.8)} fill="url(#bark)" stroke={INK} strokeWidth="1.2" strokeLinejoin="round" {...hair} />
      ))}
      <path d={taper(MAIN, 15, 1.6)} fill="url(#bark)" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" {...hair} />
      <path d={highlight(MAIN, 15, 1.6)} fill="none" stroke="#a4876b" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" {...hair} />
      {KNOTS.map(([u, r]) => {
        const [x, y] = pointAt(MAIN, u);
        return <ellipse key={u} cx={x.toFixed(1)} cy={y.toFixed(1)} rx={r * 1.5} ry={r} fill="#4c3929" opacity="0.55" />;
      })}

      {/* flower stems, leaves, then blossoms */}
      {stems.map((s, i) => (
        <path key={i} d={`M${f(s.from)}Q${f(s.bend)} ${f(s.to)}`} fill="none" stroke="#7a5c45" strokeWidth="1.3" strokeLinecap="round" {...hair} />
      ))}
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x.toFixed(1)} ${l.y.toFixed(1)}) rotate(${l.r.toFixed(1)}) scale(${l.s.toFixed(2)})`}>
          <path d={LEAF} fill={l.color} stroke={INK} strokeOpacity="0.6" strokeWidth="1" {...hair} />
          <path d="M0 -2V-19" stroke={INK} strokeOpacity="0.35" strokeWidth="0.8" {...hair} />
        </g>
      ))}
      {blooms.map((b, i) =>
        b.kind === "full" ? <FullBloom key={i} b={b} /> : b.kind === "half" ? <HalfBloom key={i} b={b} /> : <Bud key={i} b={b} />,
      )}

      {children}
    </svg>
  );
}
