import { useParams } from 'react-router-dom';

import { projects, ProjectsInfo } from '@/shared/data/constants';
import { classNames, instanceOf } from '@/shared/libs';

// import cls from './ProjectPage.module.scss';

interface ProjectPageProps {
  className?: string;
}
type RouteParams = {
  name: string;
};

type NotFoundProject = {
  err: string;
};

function getProject(name: string | undefined): ProjectsInfo | NotFoundProject {
  let result: ProjectsInfo | NotFoundProject = {
    err: 'It is not my project. Please go back to main page',
  };

  if (typeof name === 'string') {
    const project = projects.filter((project) => project.title === name)[0];
    if (project) {
      result = project;
    }
  }
  return result;
}

const ProjectPage = ({ className }: ProjectPageProps) => {
  const params = useParams<RouteParams>();
  const project = getProject(params.name);
  if (instanceOf<ProjectsInfo>(project, 'title')) {
    return (
      <div className={classNames('cls.projectPage', {}, [className])}>
        <h1 style={{ color: 'black' }}>{project.title}</h1>
      </div>
    );
  }
  return (
    <div className={classNames('cls.projectPage', {}, [className])}>
      <h1 style={{ color: 'black' }}>{project.err}</h1>
    </div>
  );
};

export default ProjectPage;
