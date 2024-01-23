/* eslint-disable react/button-has-type */
/* eslint-disable no-unneeded-ternary */
import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/libs';

import cls from './AppButton.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const AppButton: FC<AppButtonProps> = (props) => {
  const { className, children, theme = ButtonTheme.CLEAR, type, ...otherProps } = props;

  return (
    <button
      type={type ? type : 'button'}
      className={classNames(cls.appButton, {}, [className, cls[theme]])}
      {...otherProps}>
      {children}
    </button>
  );
};

export { AppButton };
