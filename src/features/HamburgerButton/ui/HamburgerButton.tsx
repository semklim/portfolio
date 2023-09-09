import { ButtonHTMLAttributes, memo, useEffect, useState } from 'react';

import { classNames } from '@/shared/libs';

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
    <button
      type="button"
      className={classNames(cls['btn-hamburger'], {}, [className, cls.display_none])}
      {...otherProps}>
      <div className={cls['hamburger-box']}>
        <div className={classNames(cls['hamburger-inner'], { [cls.close]: open }, [])} />
      </div>
    </button>
  );
});

export { HamburgerButton };
