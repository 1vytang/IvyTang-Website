/**
 * A calico cat curled up asleep on the floor, head resting on its front paws and
 * tail wrapped around its front. The body breathes slowly; the z's drift up from
 * above its back, clear of its face.
 */

const INK = "#4a3a2e";
const FUR = "#f6efe3";
const SHADE = "#e7dccb";
const ORANGE = "#d49a5e";
const DARK = "#6b5240";
const PINK = "#e6a69c";
const line = { stroke: INK, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" } as const;

const BODY = "M42 60C42 36 72 24 102 26C132 28 158 42 158 64C158 80 142 86 112 86H62C48 86 42 76 42 60Z";
const HEAD = "M14 62C12 46 24 35 40 35C56 35 67 46 65 62C63 74 51 80 39 80C27 80 16 74 14 62Z";

export default function Cat() {
  return (
    <svg className="deco deco-cat" viewBox="0 0 170 92">
      <defs>
        <clipPath id="cat-body">
          <path d={BODY} />
        </clipPath>
        <clipPath id="cat-head">
          <path d={HEAD} />
        </clipPath>
      </defs>

      {/* z's float above the back, away from the face */}
      <g className="zzz" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M78 16h7l-7 8h7" />
        <path d="M92 6h5l-5 6h5" opacity="0.7" />
      </g>

      <ellipse cx="88" cy="87" rx="74" ry="4" fill={INK} opacity="0.1" />

      <g className="breathe">
        {/* body with calico patches, belly shading and fur strokes */}
        <path d={BODY} fill={FUR} />
        <g clipPath="url(#cat-body)">
          <ellipse cx="100" cy="30" rx="30" ry="13" fill={ORANGE} />
          <ellipse cx="134" cy="46" rx="17" ry="14" fill={DARK} />
          <ellipse cx="150" cy="70" rx="12" ry="10" fill={ORANGE} />
          <path d="M42 74C70 84 120 86 158 72V92H42Z" fill={SHADE} />
          <g fill="none" stroke="#c9b9a2" strokeWidth="1.1" strokeLinecap="round">
            <path d="M74 40q4-3 8-2M86 52q4-2 7-1M112 60q4-2 8-1M70 62q3-2 6-1" />
          </g>
        </g>
        <path d={BODY} fill="none" {...line} />
        {/* haunch */}
        <path d="M120 40C142 44 152 58 147 76" fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />

        {/* tail wrapped around the front */}
        <path d="M152 74C160 84 146 88 120 88H64" fill="none" stroke={INK} strokeWidth="11" strokeLinecap="round" />
        <path d="M152 74C160 84 146 88 120 88H64" fill="none" stroke={FUR} strokeWidth="7" strokeLinecap="round" />
        <path d="M78 88H64" fill="none" stroke={DARK} strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* front paws */}
      <ellipse cx="44" cy="81" rx="13" ry="6" fill={FUR} {...line} />
      <ellipse cx="60" cy="83" rx="11" ry="5.5" fill={FUR} {...line} />
      <path d="M37 82v-3M42 83v-3M55 84v-3M60 85v-3" stroke={INK} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      {/* ears (behind the head) */}
      <path d="M19 47L17 25L35 38Z" fill={FUR} {...line} />
      <path d="M21 42L20 30L30 38Z" fill={PINK} />
      <path d="M44 37L57 21L61 45Z" fill={ORANGE} {...line} />
      <path d="M48 38L56 27L58 42Z" fill={PINK} />

      {/* head with a patch over one side */}
      <path d={HEAD} fill={FUR} />
      <g clipPath="url(#cat-head)">
        <ellipse cx="57" cy="44" rx="13" ry="11" fill={ORANGE} />
        <ellipse cx="38" cy="78" rx="18" ry="5" fill={SHADE} />
      </g>
      <path d={HEAD} fill="none" {...line} />

      {/* sleeping face */}
      <path d="M23 57q5 4 10 0M43 57q5 4 10 0" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M23 57l-2 1M53 57l2 1" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M35.6 63h5.4l-2.7 3.2z" fill={PINK} stroke={INK} strokeWidth="1" strokeLinejoin="round" />
      <path d="M38.3 66.2q-1.5 3-4.6 2.2M38.3 66.2q1.5 3 4.6 2.2" fill="none" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="23" cy="65" rx="3.5" ry="2" fill={PINK} opacity="0.55" />
      <ellipse cx="53" cy="65" rx="3.5" ry="2" fill={PINK} opacity="0.55" />
      <g stroke={INK} strokeWidth="0.9" strokeLinecap="round" opacity="0.55">
        <path d="M22 66l-16-2M22 68.5l-15 3M55 66l9-2M55 68.5l8 1.5" />
      </g>
    </svg>
  );
}
