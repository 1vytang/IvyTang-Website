"use client";

import { useEffect, useRef, useState } from "react";
import { apps, desktopIcons, type AppId } from "./apps";
import { Icon } from "./icons";

type Props = {
  openIds: AppId[];
  focusedId: AppId | null;
  onTab: (id: AppId) => void;
  onLaunch: (id: AppId) => void;
};

function Clock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = window.setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="clock" suppressHydrationWarning>
      {now ? now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) : ""}
    </span>
  );
}

export default function Taskbar({ openIds, focusedId, onTab, onLaunch }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.preventDefault(); // so the desktop doesn't also close the front window
      setMenuOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [menuOpen]);

  return (
    <footer className="taskbar">
      <div className="start" ref={menuRef}>
        <button
          type="button"
          className="start-btn"
          aria-label="Start menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Icon name="sakura" size={28} />
        </button>
        {menuOpen && (
          <nav className="start-menu" aria-label="All apps">
            <p className="start-head">ivy os</p>
            {desktopIcons.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  onLaunch(id);
                  setMenuOpen(false);
                }}
              >
                <Icon name={apps[id].icon} size={24} />
                {apps[id].label}
              </button>
            ))}
          </nav>
        )}
      </div>

      <span className="taskbar-sep" aria-hidden="true" />

      <div className="tabs">
        {openIds.map((id) => (
          <button
            key={id}
            type="button"
            className={`tab ${id === focusedId ? "is-active" : ""}`}
            onClick={() => onTab(id)}
            title={apps[id].title}
          >
            <Icon name={apps[id].icon} size={20} />
            <span>{apps[id].title}</span>
          </button>
        ))}
      </div>

      <Clock />
    </footer>
  );
}
