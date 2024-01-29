/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/media-has-caption */
import { useParams } from 'react-router-dom';

import { getProject } from '@/entities/projectByParams';
import { ProjectBody, ProjectHeader } from '@/entities/ProjectWithDetail';
import { Breadcrumbs } from '@/features';
import { Projects } from '@/shared/data/constants';
import { classNames, isProject } from '@/shared/libs';

import cls from './Project.module.scss';
import { Helmet } from 'react-helmet';

interface ProjectProps {
  className?: string;
}

type RouteParams = {
  id: string;
};

const Project = ({ className }: ProjectProps) => {
  const { id } = useParams<RouteParams>();
  const project = getProject(id);

  if (isProject<Projects>(project, 'title')) {
    return (
      <>
        <Helmet>
          <title>{project.title}</title>
        </Helmet>
        <section className={classNames(cls.projectSection, {}, [className])}>
          <Breadcrumbs basePath="/project" />
          <div className={classNames(cls.project)}>
            <ProjectHeader project={project} />
            <ProjectBody project={project} />
          </div>
        </section>
      </>
    );
  } else {
    return (
      <section className={classNames(cls.projectSection, {}, [className])}>
        <Breadcrumbs basePath="/project" />
        <h1 style={{ color: 'black' }}>{project.err}</h1>
      </section>
    );
  }
};

export default Project;
