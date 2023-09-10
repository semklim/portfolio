import { memo } from 'react';

import { classNames } from '@/shared/libs';

import cls from './Introduce.module.scss';

interface IntroduceProps extends React.HTMLProps<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

const Introduce = memo((props: IntroduceProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <section className={classNames(cls.introduce, {}, [className])} {...otherProps}>
      {children}
    </section>
  );
});

export { Introduce };
