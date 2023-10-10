import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React component that scrolls the window to the top whenever the route changes.
 *
 * This component utilizes the `useEffect` hook to listen for changes in the route (`pathname`)
 * and scrolls the window to the top using `window.scrollTo(0, 0)` whenever a route change is detected.
 * It ensures a smooth transition when navigating between different views in a single-page application.
 *
 * @component
 * @example
 * // Usage within a React Router setup:
 * import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 * import { ScrollToTop } from '@/features';
 *
 * const App = () => {
 *   return (
 *     <Router>
 *       <ScrollToTop />
 *       <Suspense fallback={"Loading ..."}>
 *         <Routes>
 *           <Route path="/home" element={<Home />} />
 *           <Route path="/about" element={<About />} />
 *           ------------- Additional routes -------------
 *         </Routes>
 *       </Suspense>
 *     </Router>
 *   );
 * };
 *
 * @component
 * @example
 * // Usage within the main App component:
 * import { useMemo } from 'react';
 * import { ScrollToTop } from '@/features';
 * import { AppRouter } from '../provider/router';
 *
 * const App = () => {
 *   return (
 *     <>
 *       <ScrollToTop />
 *       <Navbar />
 *       {useMemo(
 *         () => (
 *           <AppRouter />
 *         ),
 *         [],
 *       )}
 *     </>
 *   );
 * };
 *
 * @returns {null} - This component does not render any UI and returns `null`.
 */
const ScrollToTop = () => {
  // Get the current pathname using the `useLocation` hook from 'react-router-dom'.
  const { pathname } = useLocation();

  // Use the `useEffect` hook to scroll the window to the top whenever the pathname changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // The component returns `null` as it doesn't render any UI elements.
  return null;
};

export { ScrollToTop };
