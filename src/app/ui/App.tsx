import { useMemo } from 'react';
import { Helmet } from 'react-helmet';

import bgImg from '@/shared/assets/bg/cloudBg.webp';
import { classNames } from '@/shared/libs';
import { Navbar } from '@/widgets/Navbar';

import { AppRouter } from '../provider/router';
import { useTheme } from '../provider/theme';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Helmet>
        <title>Semklim | Klymashenko Roman - Front-end Developer</title>
        <link rel="preload" href={bgImg} as="image" type="image/webp" />
      </Helmet>
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
