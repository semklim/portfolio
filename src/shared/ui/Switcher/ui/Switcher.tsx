import { FC, InputHTMLAttributes, useState } from 'react';

import { classNames } from '@/shared/libs';

import cls from './Switcher.module.scss';

interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  checked?: boolean;
}

const Switcher: FC<SwitcherProps> = ({ className, checked = false, ...otherProps }) => {
  const [isChecked, setChecked] = useState(checked);
  const change = () => {
    return () => {
      setChecked((prev) => !prev);
    };
  };

  return (
    <div className={classNames(cls.button, {}, [className, cls.b2])} id={cls['button-16']}>
      <input type="checkbox" onChange={change} className={cls.checkbox} checked={isChecked} {...otherProps} />
      <div className={cls.knobs} />
      <div className={cls.layer} />
    </div>
  );
};

export { Switcher };
