import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Breeds from './components/Breeds';
import BreedDetail from './components/BreedDetail';
import Insurance from './components/Insurance';
import HealthArticle from './components/HealthArticle';
import Services from './components/Services';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/breeds" element={<Breeds />} />
      <Route path="/breed/:slug" element={<BreedDetail />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/article/pet-insurance" element={<HealthArticle />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;