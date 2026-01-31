import { Sun, Moon, Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const colorThemes = [
  { id: "cyan" as const, color: "185 100% 50%", label: "Cyan" },
  { id: "purple" as const, color: "270 100% 65%", label: "Purple" },
  { id: "orange" as const, color: "25 100% 55%", label: "Orange" },
  { id: "green" as const, color: "150 100% 45%", label: "Green" },
  { id: "rose" as const, color: "340 100% 60%", label: "Rose" },
];

const ThemeControls: React.FC = () => {
  const { mode, colorTheme, toggleMode, setColorTheme } = useTheme();
  const [showPalette, setShowPalette] = useState(false);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      {/* Color Palette Picker */}
      <div className="relative">
        <motion.button
          onClick={() => setShowPalette(!showPalette)}
          className="p-2 md:p-3 rounded-full glass-effect hover:bg-secondary/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Change color theme"
        >
          <Palette className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
        </motion.button>

        <AnimatePresence>
          {showPalette && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="absolute right-0 top-12 md:top-14 p-2 md:p-3 rounded-xl glass-effect shadow-lg z-50"
            >
              <div className="flex gap-2">
                {colorThemes.map((theme) => (
                  <motion.button
                    key={theme.id}
                    onClick={() => {
                      setColorTheme(theme.id);
                      setShowPalette(false);
                    }}
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full transition-all ${colorTheme === theme.id ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""
                      }`}
                    style={{ backgroundColor: `hsl(${theme.color})` }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Set ${theme.label} theme`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dark/Light Mode Toggle */}
      <motion.button
        onClick={toggleMode}
        className="p-2 md:p-3 rounded-full glass-effect hover:bg-secondary/50 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      >
        <AnimatePresence mode="wait">
          {mode === "dark" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ThemeControls;
