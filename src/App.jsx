import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SpeciesDetail from './components/SpeciesDetail';
import Insurance from './components/Insurance';
import HealthArticle from './components/HealthArticle';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/species/:name" element={<SpeciesDetail />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/article/pet-insurance" element={<HealthArticle />} />
    </Routes>
  );
}

export default App;