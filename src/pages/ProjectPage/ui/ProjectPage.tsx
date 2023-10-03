/* eslint-disable jsx-a11y/media-has-caption */
import { Link, useParams } from 'react-router-dom';

import { projects, ProjectsInfo } from '@/shared/data/constants';
import { classNames, instanceOf } from '@/shared/libs';
import { ButtonPushable } from '@/shared/ui/ButtonPushable/ButtonPushable';

import cls from './ProjectPage.module.scss';

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
      <div className={classNames(cls.projectPage, {}, [className])}>
        <section className={cls.video}>
          <div>
            <video src={project.video} controls />
          </div>
        </section>
        <section className={cls.desc}>
          <Link to="/"> {'<-Go back'}</Link>
          <hr className={cls.line} />
          <h1>{project.title}</h1>
          <article>
            <p>{project.desc}</p>
          </article>
          <p>Techs that use:</p>
          <div className={cls.techs}>
            {project.techs.map((el) => (
              <img src={el} key={el} width={40} alt="" />
            ))}
          </div>
          <p>API that use:</p>
          <ul>{project.usedApi.length > 0 ? project.usedApi.map((el) => <li key={el}>-{el}</li>) : '-'}</ul>
          <p>Architect patterns that use:</p>
          <ul>
            {project.architectPatterns.length > 0
              ? project.architectPatterns.map((el) => (
                  <li key={el.name}>
                    -<a href={el.link}>{el.name}</a>
                  </li>
                ))
              : '-'}
          </ul>
          <p>Check this work on:</p>
          <div className={cls.links}>
            <a href={project.gitLink}>
              <ButtonPushable btnTxt="GitHub" />
            </a>
            {project.deployed ? (
              <a href={project.deployed}>
                <ButtonPushable btnTxt="Live" />
              </a>
            ) : (
              ''
            )}
          </div>
        </section>
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
