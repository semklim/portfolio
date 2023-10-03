import { useState } from 'react';
import LazyLoad from 'react-lazy-load';

import { ProjectsInfo } from '@/shared/data/constants';
import { classNames } from '@/shared/libs';
import { ButtonPushable } from '@/shared/ui/ButtonPushable/ButtonPushable';

import cls from './ProjectCard.module.scss';

interface ProjectCardProps {
  className?: string;
  project: ProjectsInfo;
}

const ProjectCard = ({ className, project }: ProjectCardProps) => {
  const { title, desc, mainImg, video } = project;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <div className="header">
        <LazyLoad>
          <video
            src={video}
            autoPlay
            muted
            loop
            style={{ display: isLoading ? 'none' : 'block' }}
            onCanPlay={() => setIsLoading(false)}
          />
        </LazyLoad>
        <img
          className={cls.content}
          loading="lazy"
          src={mainImg}
          alt={title}
          style={{ display: !isLoading ? 'none' : 'block' }}
        />
      </div>
      <div className={cls.cardFooter}>
        <h4 className={cls.cardFooterTitle}>{title}</h4>
        <p className={cls.cardFooterDescription}>{desc}</p>
        <div className={cls.links}>
          <a href={`/project/${title}`} className={cls.showMore}>
            <ButtonPushable btnTxt="Show details" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
