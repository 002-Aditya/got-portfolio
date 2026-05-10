import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import './App.css';

function App() {
  return (
    <div>
      <Preloader />
      <CustomCursor />
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
