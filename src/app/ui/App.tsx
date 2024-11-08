import { Helmet } from 'react-helmet';

import { ScrollToTop } from '@/features';
import { classNames } from '@/shared/libs';
import { Navbar } from '@/widgets/Navbar';

import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRouter } from '../provider/router';
import { useTheme } from '../provider/theme';

const App = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Function to check if we can go back
    const updateCanGoBack = () => {
      setCanGoBack(window.history.length > 1);
    };

    // Initial check on mount
    updateCanGoBack();

    // Listen to the popstate event
    const handlePopState = () => {
      updateCanGoBack();
    };

    window.addEventListener('popstate', handlePopState);

    console.log('IS Can go back? -> ', canGoBack);
    // Show or hide the back button based on history length
    if (canGoBack) {
      console.log('SHOW BTN', canGoBack);
      
      WebApp.BackButton.show();
    } else {
      WebApp.BackButton.hide();
    }

    // Set up back button click handler
    const goBack = () => {
      window.history.back();
    };
    WebApp.BackButton.onClick(goBack);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('popstate', handlePopState);
      WebApp.BackButton.offClick(goBack);
    };
  }, [location, canGoBack]); // Track location and canGoBack for changes

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
