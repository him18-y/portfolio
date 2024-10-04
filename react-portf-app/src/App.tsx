import React from 'react';
import Top from './pages/homes/top';
import NoMatch from './pages/nomatch';
import HHeader from './components/HHeader';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';  // Routerは削除

const App: React.FC = () => {
  return (
    <>
      <HHeader />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
