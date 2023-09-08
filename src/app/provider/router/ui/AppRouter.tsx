import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routerConfig';
import Loader from '@/shared/ui/Loader';

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export { AppRouter };
