import { lazy } from 'react';

const About = lazy(() => import('./About/ui/About'));
const Introduce = lazy(() => import('./Introduce/ui/Introduce'));
const Projects = lazy(() => import('./Projects/ui/Projects'));

export { About };
export { Introduce };
export { Projects };
