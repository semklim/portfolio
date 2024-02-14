/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/media-has-caption */
import { useParams } from 'react-router-dom';

import { ProjectBody, ProjectHeader } from '@/entities/Project';
import { Breadcrumbs } from '@/features';
import { projects, Projects } from '@/shared/data/constants';
import { classNames, isProject } from '@/shared/libs';

import cls from './ProjectDetails.module.scss';
import { Helmet } from 'react-helmet';

interface ProjectDetailsProps {
  className?: string;
}

type RouteParams = {
  id: string;
};

export function getProject(id: string | undefined): Projects | { err: string } {
  const project = projects.find((p) => p.id === id);

  return project || { err: 'It is not my project. Please go back to the main page' };
}

const ProjectDetails = ({ className }: ProjectDetailsProps) => {
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

export default ProjectDetails;
