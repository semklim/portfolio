import { ButtonHTMLAttributes, memo, useEffect, useState } from 'react';

import { classNames } from '@/shared/libs';
import { AppButton } from '@/shared/ui/AppButton/AppButton';

import cls from './HamburgerButton.module.scss';

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isOpened: boolean;
}

const HamburgerButton = memo((props: HamburgerButtonProps) => {
  const { className, isOpened, ...otherProps } = props;
  const [open, setOpen] = useState(isOpened);
  useEffect(() => {
    setOpen(isOpened);
  }, [isOpened]);

  return (
    <AppButton
      type="button"
      className={classNames(cls['btn-hamburger'], {}, [className, cls.display_none])}
      {...otherProps}
      aria-label="Hamburger Menu">
      <div className={cls['hamburger-box']}>
        <div className={classNames(cls['hamburger-inner'], { [cls.close]: open }, [])} />
      </div>
    </AppButton>
  );
});

export { HamburgerButton };
