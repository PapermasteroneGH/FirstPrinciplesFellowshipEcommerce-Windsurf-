import { useTheme } from "@/contexts/theme-context";
import { Palette, Sun, Moon, Settings } from "lucide-react";
import type { Theme } from "@/contexts/theme-context";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'blue' as Theme, icon: Palette, label: 'Blue Ocean' },
    { name: 'green' as Theme, icon: Palette, label: 'Green Forest' },
    { name: 'purple' as Theme, icon: Palette, label: 'Purple Dream' },
    { name: 'orange' as Theme, icon: Palette, label: 'Orange Sunset' },
    { name: 'dark' as Theme, icon: Moon, label: 'Dark Mode' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border p-2">
      <div className="flex items-center space-x-2">
        <Settings className="h-4 w-4 text-gray-600" />
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          className="flex items-center space-x-2 text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none"
        >
          {themes.map((themeOption) => (
            <option key={themeOption.name} value={themeOption.name}>
              {themeOption.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex space-x-1">
        {themes.map((themeOption) => (
          <button
            key={themeOption.name}
            onClick={() => setTheme(themeOption.name)}
            className={`w-8 h-8 rounded-md border-2 transition-all ${
              theme === themeOption.name
                ? 'ring-2 ring-offset-2'
                : 'hover:border-opacity-50'
            }`}
            style={{
              backgroundColor: theme === themeOption.name ? (themeOption.name === 'dark' ? '#1F2937' : `var(--${themeOption.name}-primary)`) : undefined,
              borderColor: theme === themeOption.name ? (themeOption.name === 'dark' ? '#374151' : `var(--${themeOption.name}-border)`) : undefined
            }}
            title={themeOption.label}
          >
            {themeOption.name === 'dark' ? (
              <Moon className="h-4 w-4 text-white" />
            ) : (
              <Palette className="h-4 w-4 text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
