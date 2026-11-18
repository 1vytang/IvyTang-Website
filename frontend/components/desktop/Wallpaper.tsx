/**
 * Decorative wallpaper: a cozy room with a round window onto the mountains,
 * a long blossom branch dropping petals, a paper floor lantern, a low tea table,
 * a plant, and a few original little creatures living in the room:
 * a sleeping cat, a moss spirit, two acorn sprites, and a bird.
 */

const INK = "#4a3a2e";
const WOOD = "#8a6a4f";
const S = { stroke: INK, strokeWidth: 2.5, strokeLinejoin: "round", strokeLinecap: "round" } as const;

function RoundWindow() {
  return (
    <svg className="deco deco-window" viewBox="0 0 200 200">
      <defs>
        <clipPath id="maru">
          <circle cx="100" cy="100" r="86" />
        </clipPath>
      </defs>
      <g clipPath="url(#maru)">
        <rect width="200" height="200" fill="#f5eddd" />
        <circle cx="146" cy="66" r="17" fill="#dd9a80" opacity="0.85" />
        <path d="M28 64h44M44 74h34M120 100h40" stroke="#e6dac6" strokeWidth="5" strokeLinecap="round" />
        <path d="M-10 168L72 92Q100 66 128 92L210 168Z" fill="#b6c1ad" />
        <path d="M80 85Q100 66 120 85L113 93L106 87L100 95L93 87L86 93Z" fill="#fbf7ef" />
        <path d="M-10 176Q50 140 110 168T210 160V210H-10Z" fill="#8fa98a" />
        <path d="M-10 190Q70 170 130 186T210 182V210H-10Z" fill="#7e9878" />
      </g>
      <circle cx="100" cy="100" r="86" fill="none" stroke={WOOD} strokeWidth="11" />
      <circle cx="100" cy="100" r="92" fill="none" {...S} />
      <circle cx="100" cy="100" r="80.5" fill="none" {...S} />
    </svg>
  );
}

function Lantern() {
  return (
    <svg className="deco deco-lantern" viewBox="0 0 90 150">
      <defs>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#f6d79c" stopOpacity="0.7" />
          <stop offset="1" stopColor="#f6d79c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="45" cy="68" r="45" fill="url(#glow)" />
      <rect x="18" y="26" width="54" height="90" rx="3" fill="#fbf0d8" {...S} />
      <path d="M45 26v90M18 56h54M18 86h54" stroke={WOOD} strokeWidth="2" />
      <rect x="12" y="19" width="66" height="8" rx="3" fill={WOOD} {...S} />
      <rect x="20" y="116" width="7" height="24" fill={WOOD} {...S} />
      <rect x="63" y="116" width="7" height="24" fill={WOOD} {...S} />
    </svg>
  );
}

/** A tiny acorn creature: cap, round body, dot eyes, rosy cheeks. */
function Acorn({ x, y, tilt = 0 }: { x: number; y: number; tilt?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${tilt} 13 18)`}>
      <path d="M8 32l-1 4M18 32l1 4" {...S} strokeWidth={2} />
      <ellipse cx="13" cy="21" rx="11" ry="12" fill="#c08f5a" {...S} strokeWidth={2} />
      <path d="M1 15q12-11 24 0q-12 4-24 0z" fill="#6b5240" {...S} strokeWidth={2} />
      <path d="M13 6v-4" {...S} strokeWidth={2} />
      <circle cx="9" cy="21" r="1.6" fill={INK} />
      <circle cx="17" cy="21" r="1.6" fill={INK} />
      <circle cx="6.5" cy="25" r="1.8" fill="#e7a596" opacity="0.8" />
      <circle cx="19.5" cy="25" r="1.8" fill="#e7a596" opacity="0.8" />
    </g>
  );
}

function TeaTable() {
  return (
    <svg className="deco deco-table" viewBox="0 0 230 120">
      <path d="M92 18q-6-8 0-14M104 20q-6-8 0-14" fill="none" stroke="#bcae9c" strokeWidth="2.5" strokeLinecap="round" />
      {/* teapot with a side handle */}
      <ellipse cx="98" cy="46" rx="25" ry="17" fill="#8fa98a" {...S} />
      <ellipse cx="98" cy="31" rx="10" ry="4" fill="#7e9878" {...S} />
      <path d="M73 44q-12-1-15-11" fill="none" {...S} strokeWidth={4} />
      <path d="M121 40l22-9" fill="none" {...S} strokeWidth={5} />
      {/* cups */}
      <path d="M150 44h18l-2 18h-14z" fill="#f4ede1" {...S} />
      <path d="M151 52h16" stroke="#9fb39a" strokeWidth="3" />
      <path d="M176 44h18l-2 18h-14z" fill="#f4ede1" {...S} />
      <path d="M177 52h16" stroke="#9fb39a" strokeWidth="3" />
      {/* two acorn sprites sharing the table */}
      <g className="hop">
        <Acorn x={18} y={26} tilt={-6} />
      </g>
      <g className="hop hop-late">
        <Acorn x={196} y={26} tilt={8} />
      </g>
      {/* table */}
      <rect x="10" y="62" width="210" height="13" rx="6" fill="#a97c50" {...S} />
      <path d="M32 75v38M198 75v38" {...S} strokeWidth={9} stroke={INK} />
      <path d="M32 75v38M198 75v38" stroke="#8a6a4f" strokeWidth="4.5" />
    </svg>
  );
}

function Plant() {
  const leaves: [number, number, number, string][] = [
    [60, 30, -10, "#8fa98a"], [40, 52, -40, "#7e9878"], [80, 50, 35, "#9fb39a"],
    [34, 84, -55, "#8fa98a"], [86, 84, 50, "#7e9878"], [56, 66, 5, "#7e9878"], [62, 100, -20, "#9fb39a"],
  ];
  return (
    <svg className="deco deco-plant" viewBox="0 0 120 210">
      <path d="M60 150V40M60 110l-24-26M60 92l26-8M60 74l-18-20M60 64l18-12" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      {leaves.map(([x, y, r, c], i) => (
        <g key={i} transform={`rotate(${r} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx="13" ry="20" fill={c} {...S} strokeWidth={2} />
          <path d={`M${x} ${y - 16}v32`} stroke={INK} strokeWidth="1.5" opacity="0.5" />
        </g>
      ))}
      <path d="M30 150h60l-8 52H38z" fill="#e9dfcc" {...S} />
      <path d="M34 164h52" stroke="#c0604a" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}

/** A soft round moss spirit with a sprout on its head, peeking out beside the plant. */
function MossSpirit() {
  return (
    <svg className="deco deco-spirit" viewBox="0 0 100 110">
      <g className="bob">
        {/* sprout */}
        <path d="M50 26V12" {...S} strokeWidth={2.25} />
        <path d="M50 14q-14-10-18 2q10 6 18-2z" fill="#9fb39a" {...S} strokeWidth={2} />
        <path d="M50 12q12-12 18-2q-8 8-18 2z" fill="#7e9878" {...S} strokeWidth={2} />
        {/* body */}
        <path d="M12 98C6 62 22 26 50 26S94 62 88 98Q50 106 12 98Z" fill="#a9bb9f" {...S} />
        <path d="M24 96C22 74 34 62 50 62S78 74 76 96Q50 102 24 96Z" fill="#e3e9d8" />
        <path d="M30 52q4-3 7 0M44 47q4-3 7 0M62 54q4-3 7 0" fill="none" stroke="#7e9878" strokeWidth="2" strokeLinecap="round" />
        {/* face */}
        <circle cx="38" cy="66" r="5" fill={INK} />
        <circle cx="62" cy="66" r="5" fill={INK} />
        <circle cx="39.6" cy="64.2" r="1.6" fill="#fff" />
        <circle cx="63.6" cy="64.2" r="1.6" fill="#fff" />
        <path d="M46 75q4 3 8 0" fill="none" {...S} strokeWidth={2} />
        <ellipse cx="29" cy="74" rx="4.5" ry="3" fill="#e7a596" opacity="0.7" />
        <ellipse cx="71" cy="74" rx="4.5" ry="3" fill="#e7a596" opacity="0.7" />
        {/* little arms */}
        <path d="M16 80q-8 2-8 9M84 80q8 2 8 9" fill="none" {...S} strokeWidth={2.25} />
      </g>
    </svg>
  );
}

/** A cream cat with caramel patches, curled up asleep on the floor. */
function SleepingCat() {
  return (
    <svg className="deco deco-cat" viewBox="0 0 150 90">
      <g className="zzz" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M44 22h8l-8 9h8" />
        <path d="M58 10h6l-6 7h6" opacity="0.7" />
      </g>
      <g className="breathe">
        <path d="M126 62Q150 56 142 32" fill="none" stroke={INK} strokeWidth="11" strokeLinecap="round" />
        <path d="M126 62Q150 56 142 32" fill="none" stroke="#f3ebdd" strokeWidth="6" strokeLinecap="round" />
        <path d="M144 40Q146 34 142 32" fill="none" stroke="#c9965f" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="84" cy="62" rx="52" ry="22" fill="#f3ebdd" {...S} />
        <path d="M84 41q16-4 26 4q-6 10-24 8q-8-6-2-12z" fill="#c9965f" />
        <path d="M120 54q10 6 8 16q-10 0-14-8z" fill="#c9965f" />
        <path d="M18 48l3-16 11 9z" fill="#f3ebdd" {...S} />
        <path d="M38 41l10-12 4 15z" fill="#c9965f" {...S} />
        <circle cx="34" cy="58" r="19" fill="#f3ebdd" {...S} />
        <path d="M37 41q10 2 14 12q-8 2-14-4z" fill="#c9965f" />
        <path d="M24 58q3 3 6 0M38 58q3 3 6 0" fill="none" {...S} strokeWidth={2} />
        <path d="M32 64q2 1.5 4 0" fill="none" {...S} strokeWidth={1.75} />
        <ellipse cx="21" cy="64" rx="3.5" ry="2.2" fill="#e7a596" opacity="0.7" />
        <ellipse cx="47" cy="64" rx="3.5" ry="2.2" fill="#e7a596" opacity="0.7" />
        <path d="M44 78q6 4 12 0" fill="none" {...S} strokeWidth={2} />
      </g>
    </svg>
  );
}

/** A long blossom branch reaching in from the top-right, with a small bird perched on it. */
function BlossomBranch() {
  const blossoms: [number, number, number][] = [
    [870, 26, 1], [820, 50, 0.85], [776, 30, 1], [730, 58, 0.8], [690, 38, 0.95], [640, 64, 0.75],
    [600, 44, 0.9], [556, 70, 0.7], [510, 52, 0.85], [470, 78, 0.65], [430, 60, 0.8], [384, 82, 0.7],
    [340, 70, 0.75], [300, 92, 0.6], [258, 84, 0.65], [214, 100, 0.55], [176, 96, 0.5], [846, 82, 0.7],
    [704, 92, 0.65], [576, 100, 0.6], [452, 108, 0.55],
  ];
  return (
    <svg className="deco deco-branch" viewBox="0 0 900 150" preserveAspectRatio="xMaxYMin meet">
      <path
        d="M900 18Q800 30 720 50T540 70T360 84T160 104M790 34q10 30 56 48M680 52q10 26 24 40M560 66q6 22 16 34M440 78q4 20 12 30M330 84q-8 10-30 8"
        fill="none"
        stroke="#6b5240"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {blossoms.map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-8" rx="6" ry="8" fill="#ecc6bb" stroke={INK} strokeWidth="1.5" transform={`rotate(${a})`} />
          ))}
          <circle r="3" fill="#d9aa55" />
        </g>
      ))}
      {/* bird perched on the branch */}
      <g transform="translate(616 34)">
        <g className="bird">
        <path d="M30 22l10-4-9 9z" fill="#a97c50" {...S} strokeWidth={2} />
        <ellipse cx="18" cy="22" rx="15" ry="12" fill="#f3ebdd" {...S} strokeWidth={2} />
        <path d="M14 20q8 10 18 2" fill="#c9965f" {...S} strokeWidth={2} />
        <circle cx="8" cy="18" r="1.8" fill={INK} />
        <path d="M1 20l-5 2 5 2z" fill="#d9aa55" {...S} strokeWidth={1.5} />
        <path d="M15 34v4M21 34v4" {...S} strokeWidth={2} />
        </g>
      </g>
    </svg>
  );
}

// [left %, delay s, duration s, size px]: petals fall all along the branch
const petals: [number, number, number, number][] = [
  [96, 0, 19, 12], [90, 6, 23, 10], [84, 3, 21, 13], [78, 11, 25, 9], [72, 14, 22, 10], [66, 18, 20, 11],
  [60, 2, 24, 10], [54, 9, 21, 12], [48, 16, 26, 9], [42, 5, 22, 11], [36, 12, 25, 10], [30, 20, 23, 9],
];

export default function Wallpaper() {
  return (
    <div className="wallpaper" aria-hidden="true">
      <RoundWindow />
      <BlossomBranch />
      {petals.map(([l, d, t, s], i) => (
        <span
          key={i}
          className="petal"
          style={{ left: `${l}%`, width: s, height: s, animationDelay: `${d}s`, animationDuration: `${t}s` }}
        />
      ))}
      <div className="floor" />
      <Lantern />
      <SleepingCat />
      <TeaTable />
      <MossSpirit />
      <Plant />
    </div>
  );
}
