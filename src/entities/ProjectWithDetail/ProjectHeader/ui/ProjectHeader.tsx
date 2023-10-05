/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes, memo } from 'react';

import { ProjectsInfo } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';

import cls from './ProjectHeader.module.scss';

interface ProjectHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  project: ProjectsInfo;
}

const ProjectHeader = memo((props: ProjectHeaderProps) => {
  const {
    className,
    project: { title, date, tags },
    ...otherProps
  } = props;
  return (
    <div className={classNames(cls.mainTitleWrapper, {}, [className])} {...otherProps}>
      <h1 className={cls.mainTitle}>{title}</h1>
      <div className={cls.mainTitle__supDesc}>
        <div className={cls.mainTitle__supDesc__date}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cls.svgClock}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{date}</span>
        </div>
        <div className={cls.mainTitle__supDesc__tag}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cls.svgTag}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
          <span>{tags.join('/')}</span>
        </div>
      </div>
    </div>
  );
});

export { ProjectHeader };
