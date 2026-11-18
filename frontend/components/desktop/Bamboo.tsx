/**
 * Potted bamboo: several jointed stalks of different heights in a celadon glazed pot,
 * with sprays of slender leaves that rustle gently.
 */

const INK = "#4a3a2e";

type Culm = {
  x: number; // base x, on the soil line
  height: number;
  lean: number; // degrees
  segment: number; // length between joints
  shade: "back" | "front";
  // leaf sprays: [joint index, side (-1 left / 1 right), number of leaves, spread angle]
  sprays: [number, -1 | 1, number, number][];
};

const SOIL = 204;

const CULMS: Culm[] = [
  { x: 60, height: 168, lean: -7, segment: 30, shade: "back", sprays: [[4, -1, 4, -20], [5, 1, 3, -10]] },
  { x: 98, height: 150, lean: 6, segment: 28, shade: "back", sprays: [[3, 1, 4, -15], [5, -1, 3, -25]] },
  { x: 76, height: 196, lean: -2, segment: 32, shade: "front", sprays: [[3, -1, 3, -5], [5, 1, 5, -20], [6, -1, 4, -30]] },
  { x: 90, height: 122, lean: 3, segment: 26, shade: "front", sprays: [[3, 1, 4, -5], [4, -1, 3, -20]] },
];

const LEAF = "M0 0C4-4.5 13-6.5 27-3.4C13-0.6 4 1.6 0 0Z";

function Spray({ side, count, spread }: { side: -1 | 1; count: number; spread: number }) {
  const twigLen = 9;
  return (
    <g transform={`scale(${side} 1)`}>
      <path d={`M0 0L${twigLen} -4`} stroke="#6f8669" strokeWidth="1.4" strokeLinecap="round" />
      <g transform={`translate(${twigLen} -4)`}>
        <g className="rustle">
          {Array.from({ length: count }, (_, i) => {
            const angle = spread + i * (52 / Math.max(1, count - 1)) - 8;
            const scale = 0.8 + ((i * 37) % 10) / 40;
            const fill = i % 2 ? "#8fa98a" : "#a3b896";
            return (
              <path
                key={i}
                d={LEAF}
                fill={fill}
                stroke={INK}
                strokeWidth="1"
                strokeLinejoin="round"
                transform={`rotate(${angle.toFixed(1)}) scale(${scale.toFixed(2)})`}
              />
            );
          })}
        </g>
      </g>
    </g>
  );
}

function Stalk({ c }: { c: Culm }) {
  const joints = Math.floor(c.height / c.segment);
  const fill = c.shade === "back" ? "#b3c3a6" : "#93ab89";
  const shadow = c.shade === "back" ? "#9aae8f" : "#7a9472";
  return (
    <g transform={`translate(${c.x} ${SOIL}) rotate(${c.lean})`}>
      {/* stalk segments, bottom to top, tapering slightly */}
      {Array.from({ length: joints }, (_, i) => {
        const w = 8.5 - i * 0.45;
        const y = -(i + 1) * c.segment;
        return (
          <g key={i}>
            <rect x={-w / 2} y={y + 1.5} width={w} height={c.segment - 1.5} rx="1.5" fill={fill} stroke={INK} strokeWidth="1.4" />
            <rect x={w / 2 - 2.6} y={y + 3} width="1.6" height={c.segment - 5} rx="0.8" fill={shadow} />
            {/* raised joint ring */}
            <rect x={-w / 2 - 1.2} y={y - 0.5} width={w + 2.4} height="3" rx="1.5" fill={shadow} stroke={INK} strokeWidth="1.2" />
          </g>
        );
      })}
      {/* tapered tip */}
      <path
        d={`M${-(8.5 - joints * 0.45) / 2} ${-joints * c.segment}L0 ${-joints * c.segment - 12}L${(8.5 - joints * 0.45) / 2} ${-joints * c.segment}Z`}
        fill={fill}
        stroke={INK}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* leaf sprays growing from joints */}
      {c.sprays.map(([joint, side, count, spread], i) => (
        <g key={i} transform={`translate(${(side * (8.5 - joint * 0.45)) / 2} ${-joint * c.segment})`}>
          <Spray side={side} count={count} spread={spread} />
        </g>
      ))}
    </g>
  );
}

function Pot() {
  return (
    <g>
      {/* pebbles on the soil */}
      {[
        [52, 203, 6], [66, 205, 4.5], [86, 203, 5.5], [104, 205, 5], [116, 203, 4],
      ].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={r} ry={r * 0.6} fill={i % 2 ? "#cfc5b8" : "#bcb1a6"} stroke={INK} strokeWidth="1" />
      ))}
      {/* glazed body */}
      <path d="M30 212H130L122 268Q80 275 38 268Z" fill="#b9c9b2" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M40 218L45 262" stroke="#d6e1cf" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      {/* key-fret band */}
      <path
        d="M36 236H124M37 252H123M44 236v8h6v-4h-3M62 236v8h6v-4h-3M80 236v8h6v-4h-3M98 236v8h6v-4h-3M114 236v8h6v-4h-3"
        fill="none"
        stroke="#6f8669"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* rim */}
      <rect x="25" y="204" width="110" height="11" rx="4" fill="#a9bb9f" stroke={INK} strokeWidth="2.2" />
      {/* little feet */}
      <rect x="44" y="268" width="14" height="6" rx="2" fill="#8a6a4f" stroke={INK} strokeWidth="1.6" />
      <rect x="102" y="268" width="14" height="6" rx="2" fill="#8a6a4f" stroke={INK} strokeWidth="1.6" />
    </g>
  );
}

export default function Bamboo() {
  return (
    <svg className="deco deco-plant" viewBox="0 0 160 278">
      {CULMS.filter((c) => c.shade === "back").map((c, i) => (
        <Stalk key={`b${i}`} c={c} />
      ))}
      {CULMS.filter((c) => c.shade === "front").map((c, i) => (
        <Stalk key={`f${i}`} c={c} />
      ))}
      <Pot />
    </svg>
  );
}
