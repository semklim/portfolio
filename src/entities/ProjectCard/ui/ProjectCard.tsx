/* eslint-disable react/jsx-boolean-value */
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import { ReactComponent as DownloadSvg } from '@/shared/assets/icons/download.svg';
import { Projects } from '@/shared/data/constants';
import { classNames, createRouteParams } from '@/shared/libs';
import { ButtonPushable } from '@/shared/ui/ButtonPushable/ButtonPushable';

import cls from './ProjectCard.module.scss';
import { LoadingVideo } from './LoadingVideo';

interface ProjectCardProps {
  className?: string;
  project: Projects;
}

const ProjectCard = ({ className, project }: ProjectCardProps) => {
  const { title, desc } = project;
  const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(true);

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <LazyLoad className={cls.content}>
        <>
          <LoadingVideo isLoading={isLoadingVideo} project={project} onLoad={() => setIsLoadingVideo(false)} />
          <div className={cls.loading} style={{ display: isLoadingVideo ? 'flex' : 'none' }}>
            <DownloadSvg width={120} height={120} />
          </div>
        </>
      </LazyLoad>
      <div className={cls.cardFooter}>
        <h3 className={cls.cardFooterTitle}>{title}</h3>
        <p className={cls.cardFooterDescription}>{desc}</p>
        <div className={cls.links}>
          <Link
            to={`/project/${createRouteParams(title)}`}
            className={cls.showMore}
            preventScrollReset
            aria-label={title}>
            <ButtonPushable btnTxt="Show details" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
