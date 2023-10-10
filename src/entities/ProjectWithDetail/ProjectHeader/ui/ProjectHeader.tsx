/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes, memo } from 'react';

import { ReactComponent as ClockSvg } from '@/shared/assets/icons/clock.svg';
import { ReactComponent as TagSvg } from '@/shared/assets/icons/tag.svg';
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
          <ClockSvg className={cls.svgClock} />
          <span>{date}</span>
        </div>
        <div className={cls.mainTitle__supDesc__tag}>
          <TagSvg className={cls.svgTag} />
          <span>{tags.join('/')}</span>
        </div>
      </div>
    </div>
  );
});

export { ProjectHeader };
