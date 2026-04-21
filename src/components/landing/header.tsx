"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "./data";
import { Icon } from "./icons";

export function Header() {
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 64) {
        setIsHidden(false);
      } else if (scrollDelta > 10) {
        setIsHidden(true);
      } else if (scrollDelta < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) {
        return;
      }

      ticking.current = true;
      window.requestAnimationFrame(updateHeader);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 ${
        isHidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-4 py-3 shadow-xl shadow-slate-200/60 backdrop-blur-xl sm:px-5">
        <a className="flex items-center gap-3" href="#top" aria-label="EstateFlow AI home">
          <span className="accent-border accent-soft accent-text accent-shadow grid size-9 place-items-center rounded-full border">
            <Icon name="layers" className="sm:size-4 size-2" />
          </span>
          <span className="sm:text-sm text-xs font-semibold tracking-wide text-slate-950">EstateFlow AI</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-slate-950" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="hover-accent-strong group text-nowrap inline-flex h-10 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white shadow-lg shadow-slate-300/50 transition"
          href="#pricing"
        >
          Automate Leads
          <Icon name="arrow" className="size-4 sm:inline hidden transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}
