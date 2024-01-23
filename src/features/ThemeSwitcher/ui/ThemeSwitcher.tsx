/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { InputHTMLAttributes, memo } from 'react';

import { useTheme } from '@/app/provider/theme';
import { Theme } from '@/app/provider/theme/lib/themeContext';
import { classNames } from '@/shared/libs';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  clickOnSwitcher?: () => void;
}

const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className, clickOnSwitcher, ...otherProps } = props;
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
        {...otherProps}
      />
      <span
        className={classNames(cls.slider, {}, [cls.round, className])}
        role="radio"
        aria-checked={checked}
        aria-label="Theme Switcher"
        onClick={clickOnSwitcher}
      />
    </label>
  );
});

export { ThemeSwitcher };
