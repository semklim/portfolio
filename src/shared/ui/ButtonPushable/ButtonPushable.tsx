import { memo } from 'react';

import { classNames } from '@/shared/libs';

import { AppButton } from '../AppButton/AppButton';
import cls from './ButtonPushable.module.scss';

interface ButtonPushableProps {
  className?: string;
  btnTxt: string;
}

const ButtonPushable = memo(({ className, btnTxt }: ButtonPushableProps) => {
  return (
    <AppButton className={classNames(cls.buttonPushable, {}, [className])} type="button">
      <span className={cls['button-82-shadow']} />
      <span className={cls['button-82-edge']} />
      <span className={classNames(cls['button-82-front'])}>{btnTxt}</span>
    </AppButton>
  );
});

export { ButtonPushable };
