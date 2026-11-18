"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { Icon, type IconName } from "./icons";

type Props = {
  title: string;
  icon: IconName;
  x: number;
  y: number;
  z: number;
  width: number;
  compact?: boolean;
  focused: boolean;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
  onMinimize: () => void;
  onClose: () => void;
  children: ReactNode;
};

export default function Window({
  title, icon, x, y, z, width, compact, focused, onFocus, onMove, onMinimize, onClose, children,
}: Props) {
  const drag = useRef<{ dx: number; dy: number } | null>(null);

  function startDrag(e: PointerEvent<HTMLDivElement>) {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button")) return;
    // On phones windows are full-screen sheets, so dragging is off.
    if (window.matchMedia("(max-width: 640px)").matches) return;
    drag.current = { dx: e.clientX - x, dy: e.clientY - y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function moveDrag(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    onMove(e.clientX - drag.current.dx, e.clientY - drag.current.dy);
  }

  function endDrag() {
    drag.current = null;
  }

  return (
    <section
      className={`win ${focused ? "is-focused" : ""} ${compact ? "is-compact" : ""}`}
      style={{ left: x, top: y, zIndex: z, width }}
      role="dialog"
      aria-label={title}
      onPointerDownCapture={onFocus}
    >
      <div
        className="win-bar"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <Icon name={icon} size={20} />
        <span className="win-title">{title}</span>
        <button type="button" className="win-btn" aria-label={`Minimize ${title}`} onClick={onMinimize}>
          –
        </button>
        <button type="button" className="win-btn" aria-label={`Close ${title}`} onClick={onClose}>
          ×
        </button>
      </div>
      <div className="win-body">{children}</div>
    </section>
  );
}
