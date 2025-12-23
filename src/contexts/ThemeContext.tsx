import React, { createContext, useContext, useEffect, useState } from 'react';

type ColorTheme = 'cyan' | 'purple' | 'orange' | 'green' | 'rose';
type Mode = 'dark' | 'light';

interface ThemeContextType {
  mode: Mode;
  colorTheme: ColorTheme;
  toggleMode: () => void;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('dark');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('cyan');

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply mode
    if (mode === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    
    // Apply color theme
    if (colorTheme === 'cyan') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', colorTheme);
    }
  }, [mode, colorTheme]);

  const toggleMode = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ mode, colorTheme, toggleMode, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
