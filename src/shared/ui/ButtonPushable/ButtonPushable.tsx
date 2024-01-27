import { ButtonHTMLAttributes, FC, memo } from 'react';
import { ReactComponent as DownloadSvg } from '@/shared/assets/icons/download.svg';
import { classNames } from '@/shared/libs';

import { AppButton } from '../AppButton/AppButton';
import cls from './ButtonPushable.module.scss';

interface ButtonPushableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  btnTxt: string;
  loading?: boolean;
}

const ButtonPushable: FC<ButtonPushableProps> = memo((props) => {
  const { className, btnTxt, type, loading = false, ...otherProps } = props;
  return (
    <AppButton
      type={type || 'button'}
      className={classNames(cls.buttonPushable, {}, [className])}
      {...otherProps}>
      <span className={cls['button-82-shadow']} />
      <span className={cls['button-82-edge']} />
      <span className={classNames(cls['button-82-front'])}>
        {loading ? <DownloadSvg width={40} height={40} /> : btnTxt}
      </span>
    </AppButton>
  );
});

export { ButtonPushable };
