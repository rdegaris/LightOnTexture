import Header from './components/Header';
import Hero from './components/Hero';
import PanoramicSection from './components/PanoramicSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PanoramicSection />
      <Footer />
    </div>
  );
};

export default App;