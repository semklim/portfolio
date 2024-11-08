import { Helmet } from 'react-helmet';

import { ScrollToTop } from '@/features';
import { classNames } from '@/shared/libs';
import { Navbar } from '@/widgets/Navbar';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { AppRouter } from '../provider/router';
import { useTheme } from '../provider/theme';

const App = () => {
  const { theme } = useTheme();
  const [canGoBack, setCanGoBack] = useState(false);
  useEffect(() => {
    // Check if there is history to go back
    setCanGoBack(window.history.length > 1);
    // Optional: Listen for popstate changes to dynamically enable or disable button
    const handlePopState = () => {
      const isCanGoBack = window.history.length > 1;
      setCanGoBack(isCanGoBack);
    };
    window.addEventListener('popstate', handlePopState);

    if (canGoBack) {
      WebApp.BackButton.show();
    } else {
      WebApp.BackButton.hide();
    }

    const goBack = () => {
      window.history.back();
   }

    WebApp.BackButton.onClick(goBack);

    // Clean up event listener
    return () => {
      window.removeEventListener('popstate', handlePopState);
      WebApp.BackButton.offClick(goBack);
    };
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Helmet>
        <title>Semklim | Klymashenko Roman - Front-end Developer</title>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
