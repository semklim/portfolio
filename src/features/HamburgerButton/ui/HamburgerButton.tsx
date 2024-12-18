import { ButtonHTMLAttributes, useEffect, useState } from 'react';

import { classNames } from '@/shared/libs';
import { AppButton } from '@/shared/ui';

import cls from './HamburgerButton.module.scss';

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isOpened: boolean;
}

const HamburgerButton = (props: HamburgerButtonProps) => {
  const { className, isOpened, ...otherProps } = props;
  const [open, setOpen] = useState(isOpened);

  useEffect(() => {
    setOpen(isOpened);
  }, [isOpened]);

  return (
    <AppButton
      type="button"
      className={classNames(cls['btn-hamburger'], {}, [
        className,
        cls.display_none,
        cls['hamburger-color'],
      ])}
      {...otherProps}
      aria-label="Hamburger Menu">
      <div className={cls['hamburger-box']}>
        <div className={classNames(cls['hamburger-inner'], { [cls.close]: open }, [])} />
      </div>
    </AppButton>
  );
};

export { HamburgerButton };
