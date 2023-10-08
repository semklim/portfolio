import { memo } from 'react';

import { useTheme } from '@/app/provider/theme';
import { Theme } from '@/app/provider/theme/lib/themeContext';
import { classNames } from '@/shared/libs';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const checked = theme === Theme.DARK;
  return (
    <label htmlFor="slider" className={classNames(cls.switch, {}, [])} aria-label="Theme Switcher">
      <input
        type="checkbox"
        className={cls.inputSlider}
        onChange={toggleTheme}
        id="slider"
        checked={checked}
        aria-label="Theme Switcher"
      />
      <span className={classNames(cls.slider, {}, [cls.round, className])} />
    </label>
  );
});

export { ThemeSwitcher };
