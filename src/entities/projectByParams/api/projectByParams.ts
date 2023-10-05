import { projects, ProjectsInfo } from '@/shared/data/constants';

import { NotFoundProject } from '../model/types';

export function getProject(name: string | undefined): ProjectsInfo | NotFoundProject {
  if (!name) {
    return { err: 'It is not my project. Please go back to the main page' };
  }
  const project = projects.find((p) => p.title === name);

  return project || { err: 'It is not my project. Please go back to the main page' };
}
