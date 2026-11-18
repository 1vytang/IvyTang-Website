/**
 * A round "moon window" inspired by classical Chinese garden architecture: a carved
 * wooden fretwork ring framing a misty shan-shui landscape (layered karst peaks,
 * a river, a cliff-side pine, drifting clouds, and birds), with a red tasselled knot
 * hanging below.
 */

const INK = "#4a3a2e";
const C = 110; // centre of the window
const VIEW_R = 85; // radius of the landscape opening

/** A rounded, bell-shaped karst peak. */
function peak(x: number, base: number, h: number, w: number) {
  const top = base - h;
  return `M${x - w} ${base}C${x - w * 0.62} ${base - h * 0.95} ${x - w * 0.34} ${top} ${x} ${top}C${x + w * 0.34} ${top} ${x + w * 0.62} ${base - h * 0.95} ${x + w} ${base}Z`;
}

// [x, base, height, half-width]
const FAR: [number, number, number, number][] = [
  [42, 150, 58, 20], [74, 150, 84, 17], [104, 150, 62, 15], [138, 150, 92, 18], [170, 150, 70, 19], [198, 150, 52, 18],
];
const MID: [number, number, number, number][] = [
  [30, 168, 46, 22], [112, 168, 44, 18], [146, 168, 62, 20], [180, 168, 50, 22], [208, 168, 36, 16],
];
const NEAR: [number, number, number, number][] = [
  [168, 186, 44, 24], [200, 186, 58, 22],
];

function Fretwork() {
  const bars = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);
  return (
    <g>
      <circle cx={C} cy={C} r="95" fill="none" stroke="#8a6a4f" strokeWidth="19" />
      {/* inset carved channel */}
      <circle cx={C} cy={C} r="95" fill="none" stroke="#a5825f" strokeWidth="10" />
      {bars.map((a) => {
        const r1 = (a * Math.PI) / 180;
        const r2 = ((a + 11.25) * Math.PI) / 180;
        const x = (r: number, rad: number) => (C + Math.cos(rad) * r).toFixed(1);
        const y = (r: number, rad: number) => (C + Math.sin(rad) * r).toFixed(1);
        return (
          <g key={a}>
            {/* dividing bar */}
            <line x1={x(86, r1)} y1={y(86, r1)} x2={x(104, r1)} y2={y(104, r1)} stroke="#5e4634" strokeWidth="1.6" />
            {/* small carved diamond between bars */}
            <rect
              x={(C + Math.cos(r2) * 95 - 3.2).toFixed(1)}
              y={(C + Math.sin(r2) * 95 - 3.2).toFixed(1)}
              width="6.4"
              height="6.4"
              fill="#d1b28d"
              stroke="#5e4634"
              strokeWidth="1.1"
              transform={`rotate(${a + 11.25 + 45} ${x(95, r2)} ${y(95, r2)})`}
            />
          </g>
        );
      })}
      <circle cx={C} cy={C} r="104.5" fill="none" stroke={INK} strokeWidth="2.5" />
      <circle cx={C} cy={C} r="85.5" fill="none" stroke={INK} strokeWidth="2.5" />
    </g>
  );
}

function Tassel() {
  return (
    <g className="sway">
      <path d={`M${C} 205V222`} stroke="#b2493a" strokeWidth="2" />
      {/* decorative knot */}
      <rect x={C - 7} y="222" width="14" height="14" fill="#c0604a" stroke={INK} strokeWidth="1.5" transform={`rotate(45 ${C} 229)`} />
      <path d={`M${C - 5} 229H${C + 5}M${C} 224V234`} stroke="#8f3c2f" strokeWidth="1.2" />
      <circle cx={C} cy="243" r="2.6" fill="#d9aa55" stroke={INK} strokeWidth="1" />
      {/* tassel */}
      <rect x={C - 4.5} y="246" width="9" height="5" rx="1.5" fill="#d9aa55" stroke={INK} strokeWidth="1.2" />
      <path d={`M${C - 4.5} 251L${C - 7} 272H${C + 7}L${C + 4.5} 251Z`} fill="#c0604a" stroke={INK} strokeWidth="1.2" strokeLinejoin="round" />
      <path d={`M${C - 2.5} 253L${C - 3.6} 270M${C} 253V270M${C + 2.5} 253L${C + 3.6} 270`} stroke="#8f3c2f" strokeWidth="0.9" />
    </g>
  );
}

export default function MoonWindow() {
  return (
    <svg className="deco deco-window" viewBox="0 0 220 276">
      <defs>
        <clipPath id="moon-view">
          <circle cx={C} cy={C} r={VIEW_R} />
        </clipPath>
        <linearGradient id="moon-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe3cf" />
          <stop offset="0.65" stopColor="#f8f1e4" />
          <stop offset="1" stopColor="#f3ecdd" />
        </linearGradient>
        <filter id="mist" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
      </defs>

      <g clipPath="url(#moon-view)">
        <rect width="220" height="220" fill="url(#moon-sky)" />
        <circle cx="152" cy="62" r="14" fill="#e3a68c" opacity="0.7" />

        {/* drifting clouds */}
        <g fill="none" stroke="#e2d6c1" strokeWidth="3.5" strokeLinecap="round">
          <path d="M40 58h34q6 0 6-5" />
          <path d="M56 66h30" />
          <path d="M120 84h44q5 0 5 4" />
        </g>

        {/* birds in flight */}
        <g fill="none" stroke={INK} strokeWidth="1.1" strokeLinecap="round" opacity="0.7">
          <path d="M96 46q3-3 6 0q3-3 6 0" />
          <path d="M112 38q2.4-2.4 4.8 0q2.4-2.4 4.8 0" />
          <path d="M84 36q2-2 4 0q2-2 4 0" />
        </g>

        {/* far peaks fading into mist */}
        {FAR.map(([x, b, h, w], i) => (
          <path key={`f${i}`} d={peak(x, b, h, w)} fill="#d1d5c4" />
        ))}
        <ellipse cx="110" cy="146" rx="110" ry="9" fill="#fbf7ef" opacity="0.85" filter="url(#mist)" />

        {/* middle peaks with brush-like ridge lines */}
        {MID.map(([x, b, h, w], i) => (
          <g key={`m${i}`}>
            <path d={peak(x, b, h, w)} fill="#adbba3" />
            <path d={`M${x - w * 0.15} ${b - h * 0.85}q-${w * 0.2} ${h * 0.35} -${w * 0.1} ${h * 0.7}`} fill="none" stroke="#8fa08a" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}
        <ellipse cx="120" cy="165" rx="110" ry="7" fill="#fbf7ef" opacity="0.8" filter="url(#mist)" />

        {/* river */}
        <path d="M0 176Q60 170 110 178T220 174V220H0Z" fill="#e2e6d6" />
        <g stroke="#c4ccb9" strokeWidth="1.2" strokeLinecap="round">
          <path d="M96 184h14M120 188h18M104 194h10M150 182h12M132 198h14" />
        </g>

        {/* near peaks on the right */}
        {NEAR.map(([x, b, h, w], i) => (
          <g key={`n${i}`}>
            <path d={peak(x, b, h, w)} fill="#8fa98a" stroke={INK} strokeWidth="1.2" strokeOpacity="0.5" />
            <path d={`M${x - w * 0.3} ${b - h * 0.7}q-4 10 -2 22M${x + w * 0.2} ${b - h * 0.8}q3 12 0 24`} fill="none" stroke="#6f8669" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}

        {/* cliff on the left with texture strokes */}
        <path d="M14 220V146C28 140 40 148 50 158C58 166 62 178 76 186C86 192 92 204 96 220Z" fill="#7e9878" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
        <g fill="none" stroke="#62785d" strokeWidth="1.3" strokeLinecap="round">
          <path d="M30 160q4 10 2 22M44 166q5 9 3 20M58 180q4 8 2 16M36 192q3 7 1 14" />
        </g>
        <path d="M60 188q4-5 8 0M70 194q3-4 6 0" fill="none" stroke="#5f7a5a" strokeWidth="1.3" strokeLinecap="round" />

        {/* gnarled pine growing from the cliff */}
        <path d="M38 148C42 134 34 124 46 112C54 104 66 100 76 92" fill="none" stroke={INK} strokeWidth="6.5" strokeLinecap="round" />
        <path d="M38 148C42 134 34 124 46 112C54 104 66 100 76 92" fill="none" stroke="#6b5240" strokeWidth="4" strokeLinecap="round" />
        <path d="M46 112C40 106 32 106 26 98M60 102C62 94 58 88 62 80" fill="none" stroke="#6b5240" strokeWidth="2.4" strokeLinecap="round" />
        {[
          [80, 90, 17, 6], [62, 78, 12, 4.5], [26, 96, 12, 4.5], [52, 100, 10, 4], [90, 98, 10, 4],
        ].map(([x, y, rx, ry], i) => (
          <g key={`p${i}`}>
            <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="#5f7a5a" stroke={INK} strokeWidth="1.2" />
            <path d={`M${x - rx * 0.6} ${y - 1}h${rx * 1.2}`} stroke="#7e9878" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        ))}
      </g>

      <Fretwork />
      <Tassel />
    </svg>
  );
}
