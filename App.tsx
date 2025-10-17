import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const Landing = lazy(() => import('./components/Landing'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Landing />
    </Suspense>
  );
};

export default App;
