import { FC, ReactNode, useMemo, useState } from 'react';

import { localStorageThemeKey, Theme, ThemeContext } from '../lib/themeContext';

const defaultTheme = (localStorage.getItem(localStorageThemeKey) as Theme) || Theme.LIGHT;

interface ThemProviderProps {
  children?: ReactNode;
}

const ThemeProvider: FC<ThemProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const themeSettings = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return <ThemeContext.Provider value={themeSettings}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
