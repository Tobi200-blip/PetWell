import { Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './components/ScrollToTop';
import RouteMeta from './components/RouteMeta';
import Home from './components/Home';
import Breeds from './components/Breeds';
import BreedDetail from './components/BreedDetail';
import Cats from './components/Cats';
import CatDetail from './components/CatDetail';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';
import Search from './components/Search';
import Insurance from './components/Insurance';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import ImageCredits from './components/ImageCredits';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/breed/:slug" element={<BreedDetail />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cat/:slug" element={<CatDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/article/pet-insurance"
          element={<Navigate to="/articles/choosing-pet-insurance" replace />}
        />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/image-credits" element={<ImageCredits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;