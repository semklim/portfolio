import { RouteProps } from 'react-router-dom';

import MainPage from '@/pages/MainPage';
import ProjectPage from '@/pages/ProjectPage';
import Page404 from '@/pages/Page404';

export enum AppRoutes {
  MAIN = 'main',
  PROJECT = 'project',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROJECT]: '/project/:id',
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.project,
    element: <ProjectPage />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];
