import { Link, useParams } from 'react-router-dom';

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
  if (!name) {
    return { err: 'It is not my project. Please go back to the main page' };
  }
  const formattedName = name.replace('_', ' ');

  const project = projects.find((p) => p.title === formattedName);

  return project || { err: 'It is not my project. Please go back to the main page' };
}

const ProjectPage = ({ className }: ProjectPageProps) => {
  const params = useParams<RouteParams>();
  const project = getProject(params.name);
  if (instanceOf<ProjectsInfo>(project, 'title')) {
    return (
      <div className={classNames('cls.projectPage', {}, [className])}>
        <Link to="/">Home</Link>
        <h1 style={{ color: 'black' }}>{project.title}</h1>
        {project.techs.map((el) => (
          <img src={el} key={el} alt="" />
        ))}
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
