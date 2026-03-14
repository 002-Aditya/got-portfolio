import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DragonCursor from './components/DragonCursor';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-frost flex flex-col font-inter selection:bg-crimson/40 selection:text-frost">
      <DragonCursor />
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
