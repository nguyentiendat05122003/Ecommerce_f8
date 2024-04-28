"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    mounted && (
      <Button
        variant="ghost"
        size="icon"
        style={{ width: "30px", height: "30px" }}
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Sun
            size={20}
            className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100  "
          />
        ) : (
          <Moon
            size={20}
            className=" rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        )}
      </Button>
    )
  );
};
