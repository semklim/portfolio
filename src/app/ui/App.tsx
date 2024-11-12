import { Helmet } from 'react-helmet';

import { ScrollToTop } from '@/features';
import { classNames } from '@/shared/libs';
import { Navbar } from '@/widgets/Navbar';

import { AppRouter } from '../provider/router';
import { useTheme } from '../provider/theme';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Helmet>
        <title>Semklim | Klymashenko Roman - Web Developer</title>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
