/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/media-has-caption */
import { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { getProject } from '@/entities/projectByParams';
import { ProjectBody, ProjectHeader } from '@/entities/ProjectWithDetail';
import { Breadcrumbs } from '@/features';
import { ProjectsInfo } from '@/shared/data/constants';
import { classNames, instanceOf } from '@/shared/libs';

import cls from './Project.module.scss';

interface ProjectProps {
  className?: string;
}

type RouteParams = {
  id: string;
};

const Project = memo(({ className }: ProjectProps) => {
  const { id } = useParams<RouteParams>();
  const project = getProject(id);

  return (
    <section className={classNames(cls.projectSection, {}, [className])}>
      <Breadcrumbs basePath="/project" />
      {instanceOf<ProjectsInfo>(project, 'title') ? (
        <div className={classNames(cls.project)}>
          <Helmet>
            <title>{project.title}</title>
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
