// Simple theme toggle button that toggles between light and dark mode.

"use client";

import { useTheme } from "next-themes";
import { Sun, MoonStars } from "@/lib/icons";
import { Button } from "@/components/button";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        if (resolvedTheme === "light") {
          setTheme("dark");
        } else if (resolvedTheme === "dark") {
          setTheme("light");
        }
      }}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonStars className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};