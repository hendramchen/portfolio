"use client";

import useDarkMode from "@/hooks/use-dark-mode";

type ModeTypes = "light" | "dark";
const nextModeIcons = {
  light: "🌚",
  dark: "🌝",
};

export default function DarkMode({ defaultTheme }: { defaultTheme: string }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);
  return (
    <button onClick={toggleTheme}>{nextModeIcons[theme as ModeTypes]}</button>
  );
}
