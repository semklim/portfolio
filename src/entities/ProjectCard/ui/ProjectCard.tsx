/* eslint-disable react/jsx-boolean-value */
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

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
  const [isShowImg, setIsShowImg] = useState<boolean>(false);
  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <div className="header">
        <LazyLoad onContentVisible={() => setIsShowImg(true)}>
          <video
            src={video}
            autoPlay
            muted
            loop
            style={{ display: isLoading ? 'none' : 'block' }}
            onCanPlay={() => setIsLoading(false)}
          />
        </LazyLoad>
        {isShowImg && !isLoading ? (
          <img className={cls.content} src={mainImg} alt={title} style={{ display: !isLoading ? 'none' : 'block' }} />
        ) : (
          <div className={cls.content} style={{ aspectRatio: '16 / 9', background: 'var(--gray-500)' }} />
        )}
      </div>
      <div className={cls.cardFooter}>
        <h4 className={cls.cardFooterTitle}>{title}</h4>
        <p className={cls.cardFooterDescription}>{desc}</p>
        <div className={cls.links}>
          <Link to={`/project/${title}`} className={cls.showMore} preventScrollReset aria-label={title}>
            <ButtonPushable btnTxt="Show details" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
