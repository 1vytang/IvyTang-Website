import type { ReactNode } from "react";

/** Hand-drawn-style icons on a 64×64 grid, in the warm washi palette. */

const INK = "#4a3a2e";
const S = {
  stroke: INK,
  strokeWidth: 2.75,
  strokeLinejoin: "round",
  strokeLinecap: "round",
} as const;

const C = {
  paper: "#fbf7ef",
  cream: "#f3ebdd",
  sage: "#9fb39a",
  sageDark: "#7e9878",
  mustard: "#d9aa55",
  mustardDark: "#c08f3c",
  tan: "#dcb894",
  caramel: "#a97c50",
  taupe: "#bcb1a6",
  vermilion: "#c0604a",
  blossom: "#ebc0b4",
};

const icons = {
  computer: (
    <>
      <rect x="10" y="8" width="44" height="34" rx="5" fill={C.cream} {...S} />
      <rect x="16" y="14" width="32" height="22" rx="3" fill={C.sage} {...S} />
      <path d="M21 31l7-7 5 5 4-4 6 6" fill="none" stroke={C.paper} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="46" width="52" height="10" rx="4" fill={C.cream} {...S} />
      <line x1="40" y1="51" x2="50" y2="51" {...S} />
    </>
  ),
  folder: (
    <>
      <path d="M6 16a3 3 0 0 1 3-3h14l5 5h27a3 3 0 0 1 3 3v29a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" fill={C.mustardDark} {...S} />
      <path d="M9 26h49l-3 24a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3l1-22a2 2 0 0 1 2-2z" fill={C.mustard} {...S} />
    </>
  ),
  globe: (
    <>
      <circle cx="32" cy="32" r="24" fill={C.sage} {...S} />
      <ellipse cx="32" cy="32" rx="10" ry="24" fill="none" {...S} />
      <path d="M8 32h48M12 20h40M12 44h40" fill="none" {...S} />
    </>
  ),
  notes: (
    <>
      <path d="M14 6h26l12 12v40H14z" fill={C.paper} {...S} />
      <path d="M40 6v12h12" fill={C.cream} {...S} />
      <path d="M21 28h24M21 35h24M21 42h24M21 49h16" fill="none" {...S} />
    </>
  ),
  trash: (
    <>
      <path d="M26 12V8h12v4" fill="none" {...S} />
      <rect x="11" y="12" width="42" height="7" rx="2" fill={C.taupe} {...S} />
      <path d="M16 19h32l-3 37H19z" fill={C.cream} {...S} />
      <path d="M26 27v21M32 27v21M38 27v21" fill="none" {...S} />
    </>
  ),
  photo: (
    <>
      <rect x="8" y="8" width="48" height="48" rx="3" fill={C.paper} {...S} />
      <rect x="15" y="15" width="34" height="30" fill={C.cream} {...S} />
      <circle cx="41" cy="22" r="4" fill={C.vermilion} />
      <path d="M15 45l14-17 6 6 4-3 10 14z" fill={C.sage} {...S} />
      <path d="M25 33l4-5 4 4" fill="none" stroke={C.paper} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  chart: (
    <>
      <rect x="10" y="8" width="44" height="48" rx="4" fill={C.paper} {...S} />
      <rect x="18" y="36" width="7" height="12" fill={C.tan} {...S} />
      <rect x="29" y="26" width="7" height="22" fill={C.sage} {...S} />
      <rect x="40" y="17" width="7" height="31" fill={C.caramel} {...S} />
    </>
  ),
  code: (
    <>
      <path d="M14 6h26l12 12v40H14z" fill="#e3e9da" {...S} />
      <path d="M40 6v12h12" fill="#c9d5c2" {...S} />
      <path d="M27 30l-6 6 6 6M39 30l6 6-6 6M35 27l-4 18" fill="none" {...S} />
    </>
  ),
  torii: (
    <>
      <path d="M5 13q27 6 54 0l-2 7q-25 4-50 0z" fill={C.vermilion} {...S} />
      <rect x="10" y="25" width="44" height="6" rx="1" fill={C.vermilion} {...S} />
      <rect x="29" y="19" width="6" height="7" fill={C.vermilion} {...S} />
      <path d="M16 20l-2 36h7l1-36M48 20l2 36h-7l-1-36" fill={C.vermilion} {...S} />
      <path d="M8 57h48" {...S} />
    </>
  ),
  cards: (
    <>
      <rect x="9" y="15" width="26" height="36" rx="3" fill={C.tan} {...S} transform="rotate(-10 22 33)" />
      <rect x="29" y="12" width="26" height="36" rx="3" fill={C.paper} {...S} transform="rotate(8 42 30)" />
      <path d="M42 24l4 6-4 6-4-6z" fill={C.vermilion} {...S} transform="rotate(8 42 30)" />
    </>
  ),
  shield: (
    <>
      <path d="M32 5L54 13V30C54 44 44 54 32 59C20 54 10 44 10 30V13Z" fill={C.sage} {...S} />
      <path d="M32 11L48 17V30C48 40 41 48 32 52Z" fill={C.sageDark} />
      <rect x="23" y="29" width="18" height="14" rx="2.5" fill={C.paper} {...S} />
      <path d="M26 29v-4a6 6 0 0 1 12 0v4" fill="none" {...S} />
      <circle cx="32" cy="35.5" r="2" fill={INK} />
    </>
  ),
  badge: (
    <>
      <path d="M20 4L32 18L44 4" fill="none" stroke={C.vermilion} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="27" y="15" width="10" height="7" rx="2" fill={C.taupe} {...S} />
      <rect x="12" y="20" width="40" height="38" rx="5" fill={C.paper} {...S} />
      <rect x="18" y="28" width="12" height="14" rx="2" fill={C.tan} {...S} />
      <circle cx="24" cy="33" r="2.6" fill={C.caramel} />
      <path d="M35 30h11M35 36h11M35 42h7M18 50h28" fill="none" {...S} strokeWidth={2.25} />
    </>
  ),
  dip: (
    <>
      <path d="M38 30L50 8L56 12L46 34Z" fill={C.mustard} {...S} />
      <path d="M44 22l5 3M47 16l4 2" fill="none" stroke={C.mustardDark} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 32h48c0 14-10 24-24 24S8 46 8 32Z" fill={C.paper} {...S} />
      <path d="M10 32c4-6 10-8 16-5c4-4 12-4 16 0c6-3 11-1 14 5Z" fill={C.tan} {...S} />
      <path d="M18 42q6 4 12 0" fill="none" stroke={C.sage} strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="44" r="2" fill={C.vermilion} />
    </>
  ),
  bolt: (
    <>
      <path d="M32.0 5.0L37.4 11.7L45.5 8.6L46.8 17.2L55.4 18.5L52.3 26.6L59.0 32.0L52.3 37.4L55.4 45.5L46.8 46.8L45.5 55.4L37.4 52.3L32.0 59.0L26.6 52.3L18.5 55.4L17.2 46.8L8.6 45.5L11.7 37.4L5.0 32.0L11.7 26.6L8.6 18.5L17.2 17.2L18.5 8.6L26.6 11.7Z" fill={C.blossom} {...S} />
      <circle cx="32" cy="32" r="15" fill={C.paper} {...S} />
      <path d="M35 18L24 34h7l-3 12l12-17h-7z" fill={C.mustard} {...S} />
    </>
  ),
  mail: (
    <>
      <rect x="8" y="15" width="48" height="34" rx="3" fill={C.paper} {...S} />
      <path d="M9 17l23 18 23-18" fill="none" {...S} />
    </>
  ),
  sakura: (
    <>
      {[0, 72, 144, 216, 288].map((a) => (
        <path
          key={a}
          d="M32 31C24 24 24 12 29 8l3 4 3-4c5 4 5 16-3 23z"
          fill={C.blossom}
          {...S}
          strokeWidth={2.25}
          transform={`rotate(${a} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="4.5" fill={C.mustard} {...S} strokeWidth={2} />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

export function Icon({ name, size = 56 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}
