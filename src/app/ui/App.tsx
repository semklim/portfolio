import { useMemo } from 'react';

import { classNames } from '@/shared/libs';
import { Navbar } from '@/widgets/Navbar';

import { AppRouter } from '../provider/router';
import { useTheme } from '../provider/theme';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      {useMemo(
        () => (
          <AppRouter />
        ),
        [],
      )}
    </div>
  );
};

export default App;
