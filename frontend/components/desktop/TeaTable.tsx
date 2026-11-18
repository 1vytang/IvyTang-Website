/**
 * A low carved rosewood tea table set for gongfu tea: a clay teapot and porcelain
 * cups on a slatted bamboo tray, a lidded tea caddy, a small plate of pastries,
 * and two acorn sprites keeping it company.
 */

const INK = "#4a3a2e";
const S = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" } as const;
const TOP = 84; // y of the table surface

/**
 * A little acorn sprite: a glossy nut tapering to a point under a scaly cap,
 * with dot eyes and rosy cheeks.
 */
function Acorn({ x, tilt = 0 }: { x: number; tilt?: number }) {
  const id = `acorn-cap-${x}`;
  const CAP = "M0.5 16C0.5 8.5 6 3.5 13 3.5C20 3.5 25.5 8.5 25.5 16C25.5 18.4 23.6 19.4 21.4 18.9C16 17.8 10 17.8 4.6 18.9C2.4 19.4 0.5 18.4 0.5 16Z";
  return (
    <g transform={`translate(${x} ${TOP - 39}) rotate(${tilt} 13 22)`}>
      <defs>
        <clipPath id={id}>
          <path d={CAP} />
        </clipPath>
      </defs>
      {/* nut: rounded shoulders tapering to a pointed tip */}
      <path d="M13 39C7.5 37 3.2 31 3.2 23.5C3.2 17.5 6.8 13.5 13 13.5C19.2 13.5 22.8 17.5 22.8 23.5C22.8 31 18.5 37 13 39Z" fill="#b9814f" {...S} />
      <path d="M9.6 16.5q-2.4 10 1.2 20M16.4 16.5q2.4 10-1.2 20" fill="none" stroke="#9c6a3f" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M6.6 20q-1.6 6 0.4 11" fill="none" stroke="#dcae7c" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      <circle cx="13" cy="39.2" r="1.4" fill="#5e4430" />
      {/* face */}
      <circle cx="9.6" cy="26" r="1.6" fill={INK} />
      <circle cx="16.4" cy="26" r="1.6" fill={INK} />
      <circle cx="10.1" cy="25.4" r="0.5" fill="#fff" />
      <circle cx="16.9" cy="25.4" r="0.5" fill="#fff" />
      <circle cx="6.8" cy="29.6" r="1.9" fill="#e7a596" opacity="0.8" />
      <circle cx="19.2" cy="29.6" r="1.9" fill="#e7a596" opacity="0.8" />
      {/* scaly cap */}
      <path d={CAP} fill="#7f5e40" />
      <g clipPath={`url(#${id})`} stroke="#5e4430" strokeWidth="1" opacity="0.7">
        {Array.from({ length: 10 }, (_, i) => (
          <g key={i}>
            <path d={`M${-6 + i * 3.6} 22L${6 + i * 3.6} 2`} />
            <path d={`M${-6 + i * 3.6} 2L${6 + i * 3.6} 22`} />
          </g>
        ))}
      </g>
      <path d="M4.2 17.6C10 16.6 16 16.6 21.8 17.6" fill="none" stroke="#a07a55" strokeWidth="1.2" strokeLinecap="round" />
      <path d={CAP} fill="none" {...S} />
      {/* stem */}
      <path d="M13 3.8q0.6-2.8 3.2-3.6" fill="none" {...S} strokeWidth={2.4} />
    </g>
  );
}

function Cup({ x, filled }: { x: number; filled?: boolean }) {
  const y = TOP - 9; // sits on the tray
  return (
    <g>
      <path d={`M${x - 8} ${y - 13}h16l-2.5 11.5q-5.5 2-11 0z`} fill="#f7f1e6" {...S} strokeWidth={1.6} />
      <path d={`M${x - 6.8} ${y - 7}h13.6`} stroke="#8fa98a" strokeWidth="2" />
      {filled ? <ellipse cx={x} cy={y - 13} rx="7" ry="2" fill="#c9965f" stroke={INK} strokeWidth="1.2" /> : <ellipse cx={x} cy={y - 13} rx="7" ry="2" fill="#e9e1d2" stroke={INK} strokeWidth="1.2" />}
    </g>
  );
}

function Teapot() {
  const cx = 104, cy = TOP - 30;
  return (
    <g>
      {/* spout */}
      <path d={`M${cx - 17} ${cy + 2}C${cx - 28} ${cy} ${cx - 30} ${cy - 10} ${cx - 34} ${cy - 15}L${cx - 30} ${cy - 17}C${cx - 25} ${cy - 10} ${cx - 22} ${cy - 6} ${cx - 15} ${cy - 5}Z`} fill="#9c5a45" {...S} strokeWidth={1.8} />
      {/* loop handle */}
      <path d={`M${cx + 16} ${cy - 7}C${cx + 31} ${cy - 10} ${cx + 32} ${cy + 10} ${cx + 15} ${cy + 8}`} fill="none" stroke={INK} strokeWidth="6.5" strokeLinecap="round" />
      <path d={`M${cx + 16} ${cy - 7}C${cx + 31} ${cy - 10} ${cx + 32} ${cy + 10} ${cx + 15} ${cy + 8}`} fill="none" stroke="#9c5a45" strokeWidth="3.4" strokeLinecap="round" />
      {/* body */}
      <path d={`M${cx - 20} ${cy}C${cx - 20} ${cy - 14} ${cx + 20} ${cy - 14} ${cx + 20} ${cy}C${cx + 20} ${cy + 13} ${cx + 12} ${cy + 17} ${cx} ${cy + 17}C${cx - 12} ${cy + 17} ${cx - 20} ${cy + 13} ${cx - 20} ${cy}Z`} fill="#a8634b" {...S} />
      <path d={`M${cx - 13} ${cy - 3}q2-6 8-7`} fill="none" stroke="#d39a80" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
      <path d={`M${cx - 19} ${cy + 4}q19 6 38 0`} fill="none" stroke="#7f4635" strokeWidth="1.4" opacity="0.7" />
      {/* lid and knob */}
      <ellipse cx={cx} cy={cy - 10.5} rx="10" ry="3" fill="#9c5a45" {...S} strokeWidth={1.6} />
      <circle cx={cx} cy={cy - 15} r="3.4" fill="#8a4d3a" {...S} strokeWidth={1.5} />
      {/* foot */}
      <path d={`M${cx - 9} ${cy + 16.5}h18l-1 3.5h-16z`} fill="#8a4d3a" {...S} strokeWidth={1.5} />
    </g>
  );
}

function TeaCaddy({ x }: { x: number }) {
  return (
    <g>
      <rect x={x - 11} y={TOP - 30} width="22" height="30" rx="3" fill="#b9c9b2" {...S} />
      <rect x={x - 12.5} y={TOP - 35} width="25" height="7" rx="2.5" fill="#a9bb9f" {...S} />
      <circle cx={x} cy={TOP - 37} r="2.6" fill="#d9aa55" {...S} strokeWidth={1.4} />
      <rect x={x - 6} y={TOP - 22} width="12" height="14" rx="1.5" fill="#c0604a" stroke={INK} strokeWidth="1.4" />
      <path d={`M${x - 3} ${TOP - 18}h6M${x - 3} ${TOP - 15}h6M${x - 3} ${TOP - 12}h6`} stroke="#f3dccd" strokeWidth="1" strokeLinecap="round" />
    </g>
  );
}

function Pastries({ x }: { x: number }) {
  return (
    <g>
      <ellipse cx={x} cy={TOP - 2} rx="17" ry="3.5" fill="#f7f1e6" {...S} strokeWidth={1.6} />
      {[-7, 7, 0].map((dx, i) => (
        <g key={dx}>
          <ellipse cx={x + dx} cy={TOP - 6 - (i === 2 ? 5 : 0)} rx="6.5" ry="4.2" fill="#d9aa55" stroke={INK} strokeWidth="1.5" />
          <circle cx={x + dx} cy={TOP - 6.6 - (i === 2 ? 5 : 0)} r="2" fill="none" stroke="#b07f37" strokeWidth="1" />
        </g>
      ))}
    </g>
  );
}

function Table() {
  const wood = "#9b6a46", dark = "#74492f";
  return (
    <g>
      {/* curved hoof legs */}
      <path d={`M24 ${TOP + 8}C24 ${TOP + 30} 20 ${TOP + 40} 12 ${TOP + 50}H24C30 ${TOP + 42} 36 ${TOP + 28} 38 ${TOP + 8}Z`} fill={wood} {...S} />
      <path d={`M236 ${TOP + 8}C236 ${TOP + 30} 240 ${TOP + 40} 248 ${TOP + 50}H236C230 ${TOP + 42} 224 ${TOP + 28} 222 ${TOP + 8}Z`} fill={wood} {...S} />
      {/* carved apron with scroll ends */}
      <path d={`M36 ${TOP + 8}H224V${TOP + 15}Q214 ${TOP + 15} 210 ${TOP + 21}Q204 ${TOP + 15} 190 ${TOP + 15}H70Q56 ${TOP + 15} 50 ${TOP + 21}Q46 ${TOP + 15} 36 ${TOP + 15}Z`} fill={wood} {...S} />
      <path d={`M55 ${TOP + 13}q-4 0-4 3q0 2 2 2M205 ${TOP + 13}q4 0 4 3q0 2-2 2`} fill="none" stroke={dark} strokeWidth="1.4" strokeLinecap="round" />
      <path d={`M100 ${TOP + 11.5}h60`} stroke={dark} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* top slab with a moulded edge and wood grain */}
      <rect x="6" y={TOP} width="248" height="9" rx="3" fill="#a97c50" {...S} />
      <path d={`M10 ${TOP + 6.5}H250`} stroke={dark} strokeWidth="1.2" opacity="0.55" />
      <path d={`M30 ${TOP + 3}q30-1.5 60 0M140 ${TOP + 3.4}q40 1.4 80 0`} fill="none" stroke="#c39a6c" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    </g>
  );
}

function Tray() {
  return (
    <g>
      <rect x="62" y={TOP - 9} width="136" height="9" rx="2" fill="#c9a77f" {...S} />
      {Array.from({ length: 16 }, (_, i) => (
        <path key={i} d={`M${70 + i * 8} ${TOP - 7.5}v6`} stroke="#a5825f" strokeWidth="1.3" strokeLinecap="round" />
      ))}
    </g>
  );
}

export default function TeaTable() {
  return (
    <svg className="deco deco-table" viewBox="0 0 260 136">
      {/* steam from the teapot spout */}
      <g className="steam" fill="none" stroke="#bcae9c" strokeWidth="2.2" strokeLinecap="round">
        <path d={`M70 ${TOP - 52}q-5-6 0-12q5-6 0-12`} />
      </g>
      <Table />
      <Tray />
      <Teapot />
      <Cup x={150} filled />
      <Cup x={168} />
      <Cup x={186} />
      <Pastries x={46} />
      <TeaCaddy x={222} />
      <g className="hop">
        <Acorn x={4} tilt={-6} />
      </g>
      <g className="hop hop-late">
        <Acorn x={234} tilt={8} />
      </g>
    </svg>
  );
}
