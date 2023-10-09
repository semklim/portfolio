import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/libs';

import { AppButton } from '../AppButton/AppButton';
import cls from './ButtonPushable.module.scss';

interface ButtonPushableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  btnTxt: string;
}

const ButtonPushable = memo((props: ButtonPushableProps) => {
  const { className, btnTxt, type, ...otherProps } = props;
  return (
    <AppButton type={type || 'button'} className={classNames(cls.buttonPushable, {}, [className])} {...otherProps}>
      <span className={cls['button-82-shadow']} />
      <span className={cls['button-82-edge']} />
      <span className={classNames(cls['button-82-front'])}>{btnTxt}</span>
    </AppButton>
  );
});

export { ButtonPushable };
