"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = 'blue' | 'green' | 'purple' | 'orange' | 'dark';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
  border: string;
}

const themes: Record<Theme, ThemeColors> = {
  blue: {
    primary: '#3B82F6',
    secondary: '#1E40AF',
    accent: '#60A5FA',
    background: '#EFF6FF',
    text: '#1F2937',
    muted: '#F1F5F9',
    border: '#DBEAFE'
  },
  green: {
    primary: '#10B981',
    secondary: '#059669',
    accent: '#34D399',
    background: '#D1FAE5',
    text: '#064E3B',
    muted: '#ECFDF5',
    border: '#BBF7D0'
  },
  purple: {
    primary: '#8B5CF6',
    secondary: '#7C3AED',
    accent: '#A78BFA',
    background: '#F3E8FF',
    text: '#581C87',
    muted: '#F1F5F9',
    border: '#E9D5FF'
  },
  orange: {
    primary: '#F97316',
    secondary: '#EA580C',
    accent: '#FB923C',
    background: '#FED7AA',
    text: '#9A3412',
    muted: '#FFF7ED',
    border: '#FED7AA'
  },
  dark: {
    primary: '#1F2937',
    secondary: '#111827',
    accent: '#374151',
    background: '#0F172A',
    text: '#F1F5F9',
    muted: '#1E293B',
    border: '#374151'
  }
};

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type { Theme };
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme;
      return saved || 'blue';
    }
    return 'blue';
  });

  const colors = themes[theme];

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply theme colors to CSS variables
    const root = document.documentElement;
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--background', colors.background);
    root.style.setProperty('--text', colors.text);
    root.style.setProperty('--muted', colors.muted);
    root.style.setProperty('--border', colors.border);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colors, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
