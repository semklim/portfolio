import { useContext } from 'react';

import { localStorageThemeKey, Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(localStorageThemeKey, newTheme);
  };
  return { theme, toggleTheme };
}
