import { classNames } from '@/shared/libs';

import cls from './Introduce.module.scss';

interface IntroduceProps {
  className?: string;
}

const Introduce = ({ className }: IntroduceProps) => {
  return (
    <section className={classNames(cls.introduce, {}, [className])}>
      <h1>Introduce</h1>
    </section>
  );
};

export { Introduce };
