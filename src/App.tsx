import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import PanoramaBWPage from './pages/PanoramaBWPage';
import PanoramaColorPage from './pages/PanoramaColorPage';
import PortraiturePage from './pages/PortraiturePage';
import StillLifePage from './pages/StillLifePage';
import AboutPage from './pages/AboutPage';
import BuyPrintsPage from './pages/BuyPrintsPage';
import ArtPrintsPage from './pages/ArtPrintsPage';
import BlogPage from './pages/BlogPage';
import EquipmentPage from './pages/EquipmentPage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/panorama-bw" element={<PanoramaBWPage />} />
            <Route path="/panorama-color" element={<PanoramaColorPage />} />
            <Route path="/portraiture" element={<PortraiturePage />} />
            <Route path="/still-life" element={<StillLifePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/buy-prints" element={<BuyPrintsPage />} />
            <Route path="/art-prints" element={<ArtPrintsPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </PageTransition>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;