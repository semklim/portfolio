/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

import { getProject } from '@/entities/projectByParams';
import { ProjectBody, ProjectHeader } from '@/entities/ProjectWithDetail';
import { ReactComponent as ArrowIcon } from '@/shared/assets/icons/breadcrumbsArrow.svg';
import homeIcon from '@/shared/assets/icons/home.svg';
import { ProjectsInfo } from '@/shared/data/constants';
import { classNames, instanceOf } from '@/shared/libs';

import cls from './Project.module.scss';

interface ProjectProps {
  className?: string;
}

type RouteParams = {
  name: string;
};

const Project = memo(({ className }: ProjectProps) => {
  const params = useParams<RouteParams>();
  const formattedName = params.name ? params.name.replace('_', ' ') : undefined;
  const project = getProject(formattedName);

  return (
    <section className={classNames(cls.projectSection, {}, [className])}>
      <div className={cls.breadcrumbs}>
        <Link to="/" preventScrollReset aria-label="home">
          <img src={homeIcon} className={cls.link_breadcrumbs_icon} alt="" width={20} />
          <span>Home</span>
          <ArrowIcon className={cls.link_breadcrumbs_arrow} width={20} height={20} />
        </Link>
        <Link
          to={`/project/${formattedName}`}
          className={cls.currentPage}
          preventScrollReset
          aria-label={formattedName}>
          {formattedName}
        </Link>
      </div>
      {instanceOf<ProjectsInfo>(project, 'title') ? (
        <div className={classNames(cls.project)}>
          <Helmet>
            <title>{formattedName}</title>
          </Helmet>
          <ProjectHeader project={project} />
          <ProjectBody project={project} />
        </div>
      ) : (
        <h1 style={{ color: 'black' }}>{project.err}</h1>
      )}
    </section>
  );
});

export default Project;
