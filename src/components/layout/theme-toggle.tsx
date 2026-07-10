"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");

    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      aria-label="Toggle dark and light theme"
      className="inline-flex size-9 items-center justify-center rounded-lg border border-current/20 bg-current/5 transition hover:bg-current/10"
      onClick={toggleTheme}
      type="button"
    >
      <Moon className="size-4 dark:hidden" />
      <Sun className="hidden size-4 dark:block" />
    </button>
  );
}
