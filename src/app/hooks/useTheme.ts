import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialIsDark() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light") return false;
  if (stored === "dark") return true;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((d) => !d) };
}
