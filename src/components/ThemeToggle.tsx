import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Add transition class for smooth theme change
    root.style.transition = "background-color 0.5s ease, color 0.3s ease";
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
    
    // Trigger animation
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 500);
    return () => clearTimeout(timer);
  }, [theme]);

  const iconVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 180, opacity: 0 },
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      case "system":
        return <Monitor className="h-5 w-5" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          className="relative rounded-full p-2.5 bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card text-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden"
          whileHover={{ rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {getIcon()}
            </motion.div>
          </AnimatePresence>
          
          {/* Ripple effect on theme change */}
          <AnimatePresence>
            {isChanging && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>
          
          <span className="sr-only">Changer le thème</span>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="gap-2 cursor-pointer transition-all duration-200 hover:pl-4"
        >
          <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.3 }}>
            <Sun className="h-4 w-4" />
          </motion.div>
          <span>Jour</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="gap-2 cursor-pointer transition-all duration-200 hover:pl-4"
        >
          <motion.div whileHover={{ rotate: -30 }} transition={{ duration: 0.3 }}>
            <Moon className="h-4 w-4" />
          </motion.div>
          <span>Nuit</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="gap-2 cursor-pointer transition-all duration-200 hover:pl-4"
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Monitor className="h-4 w-4" />
          </motion.div>
          <span>Automatique</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
