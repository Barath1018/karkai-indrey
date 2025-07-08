import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-100 transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-7 w-7 text-gold-700" />
      ) : (
        <Sun className="h-7 w-7 text-blue-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
