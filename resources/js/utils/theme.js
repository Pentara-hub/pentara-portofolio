// resources/js/utils/theme.js
const KEY = "theme";

export const applyInitialTheme = () => {
  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  document.documentElement.classList.toggle("dark", isDark);
};

export const toggleTheme = () => {
  const root = document.documentElement;
  const nextIsDark = !root.classList.contains("dark");
  root.classList.toggle("dark", nextIsDark);
  localStorage.setItem(KEY, nextIsDark ? "dark" : "light");
};

export const isDarkNow = () =>
  document.documentElement.classList.contains("dark");
