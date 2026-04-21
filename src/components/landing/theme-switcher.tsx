"use client";

import { useEffect, useState } from "react";

const themes = [
  {
    id: "option-2",
    label: "Aqua",
    swatches: ["#06b6d4", "#4f46e5"],
  },
  {
    id: "option-4",
    label: "Cyan",
    swatches: ["#22d3ee", "#1d4ed8"],
  },
  {
    id: "option-9",
    label: "Mint",
    swatches: ["#2dd4bf", "#1e40af"],
  },
] as const;

type ThemeId = (typeof themes)[number]["id"];

const storageKey = "estateflow-theme";

function isThemeId(value: string | null): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

function applyTheme(theme: ThemeId) {
  const root = document.documentElement;

  if (theme === "option-2") {
    root.removeAttribute("data-theme");
  } else {
    root.dataset.theme = theme;
  }
}

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("option-2");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const nextTheme: ThemeId = isThemeId(storedTheme) ? storedTheme : "option-2";
    const stateTimer = window.setTimeout(() => setActiveTheme(nextTheme), 0);

    applyTheme(nextTheme);

    return () => window.clearTimeout(stateTimer);
  }, []);

  function handleThemeChange(theme: ThemeId) {
    setActiveTheme(theme);
    applyTheme(theme);
    window.localStorage.setItem(storageKey, theme);
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 px-4 sm:left-auto sm:right-5 sm:translate-x-0 sm:px-0">
      <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/85 p-1.5 shadow-2xl shadow-slate-300/50 backdrop-blur-xl">
        {themes.map((theme) => {
          const isActive = theme.id === activeTheme;

          return (
            <button
              className={
                isActive
                  ? "flex h-10 items-center gap-2 rounded-full bg-slate-950 px-3 text-xs font-semibold text-white shadow-lg shadow-slate-300/60"
                  : "flex h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              }
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              type="button"
              aria-pressed={isActive}
            >
              <span className="flex -space-x-1">
                {theme.swatches.map((swatch) => (
                  <span
                    className="size-3 rounded-full border border-white shadow-sm"
                    key={swatch}
                    style={{ backgroundColor: swatch }}
                  />
                ))}
              </span>
              <span>{theme.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
