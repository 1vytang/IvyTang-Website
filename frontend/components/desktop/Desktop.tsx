"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { apps, desktopIcons, isAppId, type AppId } from "./apps";
import { Icon } from "./icons";
import Wallpaper from "./Wallpaper";
import Taskbar from "./Taskbar";
import Window from "./Window";

type Win = { id: AppId; x: number; y: number; z: number; minimized: boolean };

const GUTTER = 8;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, Math.max(min, max)));
}

export default function Desktop() {
  const [wins, setWins] = useState<Win[]>([]);
  const zRef = useRef(10);
  const deskRef = useRef<HTMLDivElement>(null);
  const ready = useRef(false);

  const deskSize = () => {
    const el = deskRef.current;
    return { w: el?.clientWidth ?? 1024, h: el?.clientHeight ?? 700 };
  };

  const widthFor = (id: AppId) => Math.min(apps[id].width, deskSize().w - GUTTER * 2);

  const open = useCallback((id: AppId) => {
    setWins((ws) => {
      const z = ++zRef.current;
      if (ws.some((w) => w.id === id)) {
        return ws.map((w) => (w.id === id ? { ...w, z, minimized: false } : w));
      }
      const { w, h } = deskSize();
      const width = Math.min(apps[id].width, w - GUTTER * 2);
      const step = (ws.length % 6) * 28;
      const x = clamp((w - width) / 2 + 60 + step, GUTTER, w - width - GUTTER);
      const y = clamp(36 + step, GUTTER, h - 160);
      return [...ws, { id, x, y, z, minimized: false }];
    });
  }, []);

  const close = (id: AppId) => setWins((ws) => ws.filter((w) => w.id !== id));
  const minimize = (id: AppId) =>
    setWins((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  const focus = (id: AppId) =>
    setWins((ws) => {
      const top = Math.max(...ws.map((w) => w.z));
      if (ws.find((w) => w.id === id)?.z === top) return ws;
      const z = ++zRef.current;
      return ws.map((w) => (w.id === id ? { ...w, z } : w));
    });
  const move = (id: AppId, x: number, y: number) => {
    const { w, h } = deskSize();
    const width = widthFor(id);
    // Keep at least part of the title bar on screen so it can be grabbed again.
    const nx = clamp(x, -width + 96, w - 96);
    const ny = clamp(y, 0, h - 44);
    setWins((ws) => ws.map((win) => (win.id === id ? { ...win, x: nx, y: ny } : win)));
  };

  const visible = wins.filter((w) => !w.minimized);
  const focusedId = visible.length ? visible.reduce((a, b) => (b.z > a.z ? b : a)).id : null;

  // On first load, open whatever ?open= points at (old /projects links redirect here), else the welcome note.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("open");
    open(isAppId(param) ? param : "welcome");
    ready.current = true;
  }, [open]);

  // Keep the URL pointing at the front window so links can be shared.
  // The welcome note is the default, so it maps to the bare "/" — that way a plain
  // page load never rewrites the URL (some embedded browsers treat that as a reload).
  useEffect(() => {
    if (!ready.current) return;
    const search = focusedId && focusedId !== "welcome" ? `?open=${focusedId}` : "";
    if (window.location.search === search) return;
    window.history.replaceState(window.history.state, "", window.location.pathname + search);
  }, [focusedId]);

  // Escape closes the front window.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && focusedId && !e.defaultPrevented) close(focusedId);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusedId]);

  const onTab = (id: AppId) => {
    if (id === focusedId) minimize(id);
    else open(id);
  };

  return (
    <div className="os">
      <div className="desktop" ref={deskRef}>
        <Wallpaper />

        <ul className="icons" aria-label="Desktop">
          {desktopIcons.map((id) => (
            <li key={id}>
              <button
                type="button"
                className={`icon ${id === focusedId ? "is-selected" : ""}`}
                onClick={() => open(id)}
              >
                <Icon name={apps[id].icon} />
                <span>{apps[id].label}</span>
              </button>
            </li>
          ))}
        </ul>

        {visible.map((w) => (
          <Window
            key={w.id}
            title={apps[w.id].title}
            icon={apps[w.id].icon}
            x={w.x}
            y={w.y}
            z={w.z}
            width={widthFor(w.id)}
            compact={apps[w.id].compact}
            focused={w.id === focusedId}
            onFocus={() => focus(w.id)}
            onMove={(x, y) => move(w.id, x, y)}
            onMinimize={() => minimize(w.id)}
            onClose={() => close(w.id)}
          >
            {apps[w.id].render(open)}
          </Window>
        ))}
      </div>

      <Taskbar
        openIds={wins.map((w) => w.id)}
        focusedId={focusedId}
        onTab={onTab}
        onLaunch={open}
      />
    </div>
  );
}
