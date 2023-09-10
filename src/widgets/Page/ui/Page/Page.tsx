import { memo } from 'react';

import { classNames } from '@/shared/libs';

import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: React.ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;
  return <main className={classNames(cls.Page, {}, [className])}>{children}</main>;
});
