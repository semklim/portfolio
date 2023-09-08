import { useTheme } from '@/app/provider/theme';
import { Theme } from '@/app/provider/theme/lib/themeContext';
import { classNames } from '@/shared/libs';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const checked = theme === Theme.DARK;
  return (
    <label htmlFor="slider" className={classNames(cls.switch, {}, [])}>
      <input type="checkbox" onChange={toggleTheme} id="slider" checked={checked} />
      <span className={classNames(cls.slider, {}, [cls.round, className])} />
    </label>
  );
};

export { ThemeSwitcher };
