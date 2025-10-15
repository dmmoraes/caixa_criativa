import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

const Landing = lazy(() => import('./components/Landing'));
const MemeSapiensApp = lazy(() => import('./meme-sapiens_-desvendando-o-brasil-na-internet/App'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/meme-sapiens" element={<MemeSapiensApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
