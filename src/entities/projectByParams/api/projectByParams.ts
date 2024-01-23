import { projects, Projects } from '@/shared/data/constants';

import { NotFoundProject } from '../model/types';

export function getProject(id: string | undefined): Projects | NotFoundProject {
  const project = projects.find((p) => p.id === id);

  return project || { err: 'It is not my project. Please go back to the main page' };
}
