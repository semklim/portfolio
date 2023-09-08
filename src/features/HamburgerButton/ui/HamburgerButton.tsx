import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/libs';

import cls from './HamburgerButton.module.scss';

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const HamburgerButton: FC<HamburgerButtonProps> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <button type="button" id={cls['btn-hamburger']} className={classNames('', {}, [className])} {...otherProps}>
      <div className={cls['hamburger-box']}>
        <div className={cls['hamburger-inner']} />
      </div>
    </button>
  );
};

export { HamburgerButton };
