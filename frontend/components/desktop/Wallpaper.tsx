/**
 * Decorative wallpaper: a cozy room with a round moon window onto misty mountains,
 * a long blossom branch dropping petals, a set tea table,
 * potted bamboo, and a few original little creatures living in the room:
 * a sleeping cat, two acorn sprites, and a bird.
 */

import BlossomBranch from "./BlossomBranch";
import MoonWindow from "./MoonWindow";
import Bamboo from "./Bamboo";
import TeaTable from "./TeaTable";
import Cat from "./Cat";

const INK = "#4a3a2e";

/**
 * A small, plump songbird perched on the blossom branch, facing left.
 * Sage back and wings, cream breast with a peach blush, a white eye-ring,
 * and feet curled around the branch. It pecks now and then and blinks.
 */
function Bird() {
  const line = { stroke: INK, strokeWidth: 1.6, strokeLinejoin: "round", strokeLinecap: "round" } as const;
  return (
    <g transform="translate(598 19)">
      <g className="bird">
        {/* tail feathers, fanned behind the body */}
        <path d="M30 25L49 31.5L47.5 28L51 25.5L46.5 24.5L48 21.5L33 19.5Z" fill="#6f8669" {...line} />
        <path d="M36 23.5L46 27" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.45" />
        {/* body */}
        <path d="M6 18C6 8.5 13.5 3.5 21 4C30 4.6 36.5 11.5 37.5 20.5C38.5 30 30.5 36.2 20.5 36.2C11.5 36.2 6 28 6 18Z" fill="#9fb39a" {...line} />
        {/* cream breast and peach blush */}
        <path d="M7.4 21.5C8.6 30.5 14.5 35.4 21.5 35.4C27.5 35.4 31.6 32.4 32.6 28.4C25.5 30.4 15.5 28.6 7.4 21.5Z" fill="#f7efe1" />
        <ellipse cx="17.5" cy="29" rx="7" ry="3.6" fill="#efc9bc" opacity="0.7" />
        {/* darker cap */}
        <path d="M8.2 12.2C10.8 6.6 17.2 3.8 23.6 4.8C19.6 6.4 13.8 9.2 8.2 12.2Z" fill="#7e9878" />
        {/* wing with layered feathers */}
        <path d="M16.5 16.5C23.5 11.6 34.5 14.2 38.5 23.6C34 29.6 25 30 18.6 25.6C15.2 23 14.6 19.2 16.5 16.5Z" fill="#7e9878" {...line} />
        <path d="M27.5 26.6C32 26.6 35.6 25.4 38.5 23.6C37.2 27.8 32.8 29.6 28 28.8Z" fill="#62785d" />
        <path d="M21 20.2Q28.5 19.4 35.5 22.2M20.8 23.4Q27.5 23.4 33.8 25.4" fill="none" stroke={INK} strokeWidth="0.9" opacity="0.45" strokeLinecap="round" />
        {/* face: eye-ring, eye with highlight, blink lid, blush */}
        <circle cx="12.4" cy="14" r="3.7" fill="#fbf7ef" stroke={INK} strokeWidth="1" />
        <circle cx="12.1" cy="14.1" r="2.1" fill={INK} />
        <circle cx="12.9" cy="13.3" r="0.75" fill="#fff" />
        <ellipse className="blink" cx="12.4" cy="14" rx="3.9" ry="3.9" fill="#9fb39a" />
        <ellipse cx="11.2" cy="19.4" rx="2.6" ry="1.5" fill="#e7a596" opacity="0.7" />
        {/* two-part beak */}
        <path d="M6.6 14.6L0.6 16.4L6.4 17.2Z" fill="#d9aa55" stroke={INK} strokeWidth="1" strokeLinejoin="round" />
        <path d="M6.4 17.2L2.2 16.9" stroke={INK} strokeWidth="0.8" opacity="0.6" />
        {/* legs and toes curled around the branch */}
        <path d="M17.5 35.6L16.8 38.6M23.5 35.6L23.4 38.6" fill="none" stroke="#a97c50" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13.8 39.4Q16.6 37.6 19.6 39.6M20.6 39.4Q23.4 37.6 26.4 39.6" fill="none" stroke="#a97c50" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </g>
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
      <MoonWindow />
      <BlossomBranch>
        <Bird />
      </BlossomBranch>
      {petals.map(([l, d, t, s], i) => (
        <span
          key={i}
          className="petal"
          style={{ left: `${l}%`, width: s, height: s, animationDelay: `${d}s`, animationDuration: `${t}s` }}
        />
      ))}
      <div className="floor" />
      <Cat />
      <TeaTable />
      <Bamboo />
    </div>
  );
}
