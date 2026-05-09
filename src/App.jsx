import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </>
  );
}

export default App;
