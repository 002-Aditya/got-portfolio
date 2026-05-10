import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import './App.css';

function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
