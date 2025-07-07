import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import ImageLightbox from '../components/ImageLightbox';
import g617Image from '../assets/g617.webp';
import xpanImage from '../assets/xpan.webp';
import rolleImage from '../assets/rolle.webp';

interface EquipmentItem {
  id: string;
  name: string;
  type: string;
  description: string;
  specifications: string[];
  history: string;
  image: string;
  favoriteFeatures: string[];
}

const equipmentData: EquipmentItem[] = [
  {
    id: 'rolleiflex-2.8e',
    name: 'Rolleiflex 2.8E',
    type: 'Medium Format Twin Lens Reflex',
    description: 'The Rolleiflex 2.8E is a legendary twin-lens reflex camera that defined medium format photography. With its iconic waist-level viewfinder and exceptional Carl Zeiss optics, it delivers the distinctive square format that has captivated photographers for decades.',
    specifications: [
      'Format: 6x6cm on 120 film',
      'Lens: Carl Zeiss Planar 80mm f/2.8',
      'Shutter: Synchro-Compur leaf shutter',
      'Shutter speeds: 1s to 1/500s + B',
      'Aperture: f/2.8 to f/22',
      'Focusing: Ground glass screen',
      'Built-in light meter (selenium cell)'
    ],
    history: 'Introduced in 1956, the Rolleiflex 2.8E became the pinnacle of TLR camera design. Used by legendary photographers like Vivian Maier and Diane Arbus, it represents the golden age of medium format photography.',
    image: rolleImage,
    favoriteFeatures: [
      'Waist-level composition creates unique perspective',
      'Exceptional build quality and reliability',
      'Silent leaf shutter perfect for street photography',
      'Timeless square format aesthetic'
    ]
  },
  {
    id: 'fuji-g617',
    name: 'Fuji G617',
    type: 'Panoramic Medium Format',
    description: 'The Fuji G617 is a specialized panoramic camera that captures breathtaking wide-format images on 120 film. Its unique 6x17cm format creates cinematic landscapes that cannot be replicated with any other medium.',
    specifications: [
      'Format: 6x17cm on 120 film (4 shots per roll)',
      'Lens: Fujinon SW 90mm f/5.6',
      'Fixed aperture: f/5.6, f/8, f/11, f/16, f/22',
      'Shutter: Mechanical leaf shutter',
      'Shutter speeds: 1/4s to 1/500s + B',
      'Focusing: Zone focusing system',
      'Built-in center-weighted meter'
    ],
    history: 'Released in the 1980s, the G617 was designed specifically for landscape photographers who demanded the ultimate in panoramic format. Its extreme aspect ratio of nearly 3:1 creates images with unparalleled dramatic impact.',
    image: g617Image,
    favoriteFeatures: [
      'Unmatched panoramic format for landscapes',
      'Exceptional sharpness across the entire frame',
      'Compact and lightweight for its format',
      'Creates truly cinematic compositions'
    ]
  },
  {
    id: 'hasselblad-xpan',
    name: 'Hasselblad XPan',
    type: 'Dual Format Rangefinder',
    description: 'The Hasselblad XPan is a revolutionary rangefinder camera that shoots both standard 35mm and panoramic formats on the same roll of film. This unique capability makes it one of the most versatile cameras ever created.',
    specifications: [
      'Format: 24x36mm or 24x65mm on 35mm film',
      'Lens: Fujinon 45mm f/4 (equivalent to 25mm in panoramic)',
      'Rangefinder focusing system',
      'Shutter speeds: 8s to 1/1000s + B',
      'Aperture: f/4 to f/22',
      'Built-in TTL metering',
      'Interchangeable lenses available'
    ],
    history: 'A collaboration between Hasselblad and Fuji, the XPan (known as the TX-1 in some markets) was introduced in 1998. It represents the pinnacle of panoramic photography technology, offering photographers unprecedented flexibility.',
    image: xpanImage,
    favoriteFeatures: [
      'Dual format capability on single roll',
      'Exceptional rangefinder accuracy',
      'Compact size for a panoramic camera',
      'Professional-grade build quality'
    ]
  }
];

const EquipmentPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedSpecs, setExpandedSpecs] = useState<Set<string>>(new Set());

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Preload images for better performance
  useEffect(() => {
    equipmentData.forEach((equipment) => {
      const img = new Image();
      img.src = equipment.image;
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSpecs = (equipmentId: string) => {
    const newExpanded = new Set(expandedSpecs);
    if (newExpanded.has(equipmentId)) {
      newExpanded.delete(equipmentId);
    } else {
      newExpanded.add(equipmentId);
    }
    setExpandedSpecs(newExpanded);
  };

  const copySpecs = async (equipment: EquipmentItem) => {
    const specsText = `${equipment.name} Specifications:\n${equipment.specifications.join('\n')}`;
    try {
      await navigator.clipboard.writeText(specsText);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy specifications:', err);
    }
  };

  const openLightbox = (equipment: EquipmentItem) => {
    setSelectedEquipment(equipment);
    setSelectedImage(equipment.image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedEquipment(null);
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Equipment
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The tools that shape my vision. Each camera represents a different approach to capturing light and texture, 
                from the intimate square format of the Rolleiflex to the sweeping panoramas of the G617.
              </p>
              <p className="text-sm text-gray-500 mt-4 italic">
                Featuring actual photos of these legendary cameras from my collection.
              </p>
            </div>
          </div>
        </header>

        {/* Quick Navigation */}
        <nav className="bg-gray-100 border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <div className="flex justify-center space-x-8">
              {equipmentData.map((equipment) => (
                <button
                  key={equipment.id}
                  onClick={() => {
                    const element = document.getElementById(equipment.id);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded hover:bg-white"
                >
                  {equipment.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Equipment Grid */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <div className="grid gap-12 md:gap-16">
            {equipmentData.map((equipment, index) => (
              <article 
                key={equipment.id} 
                id={equipment.id}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''} 
                  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
                  transition-all duration-700 ease-out scroll-mt-20`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <button 
                    className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden cursor-pointer group shadow-lg w-full"
                    onClick={() => openLightbox(equipment)}
                    aria-label={`View ${equipment.name} in lightbox`}
                  >
                    <img 
                      src={equipment.image} 
                      alt={equipment.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded">
                        View Details
                      </div>
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                        {equipment.name}
                      </h2>
                      <p className="text-base md:text-lg text-gray-600 font-medium">
                        {equipment.type}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {equipment.description}
                    </p>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">
                        Why I Love This Camera
                      </h3>
                      <ul className="space-y-2">
                        {equipment.favoriteFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-gray-400 mr-3 mt-1">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <button
                        onClick={() => toggleSpecs(equipment.id)}
                        className="flex items-center justify-between w-full text-lg font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors"
                      >
                        <span>Key Specifications</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copySpecs(equipment);
                            }}
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                            title="Copy specifications"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                          <svg 
                            className={`w-5 h-5 transition-transform duration-200 ${expandedSpecs.has(equipment.id) ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div className={`transition-all duration-300 overflow-hidden ${
                        expandedSpecs.has(equipment.id) ? 'max-h-96 opacity-100' : 'max-h-24 opacity-100'
                      }`}>
                        <div className="grid grid-cols-1 gap-2">
                          {equipment.specifications.slice(0, expandedSpecs.has(equipment.id) ? equipment.specifications.length : 4).map((spec, idx) => (
                            <div key={idx} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded">
                              {spec}
                            </div>
                          ))}
                        </div>
                        {equipment.specifications.length > 4 && (
                          <button
                            onClick={() => toggleSpecs(equipment.id)}
                            className="text-sm text-blue-600 hover:text-blue-800 mt-2 font-medium"
                          >
                            {expandedSpecs.has(equipment.id) ? 'Show Less' : `Show All ${equipment.specifications.length} Specs`}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Photography Philosophy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Each camera in my collection serves a specific purpose in my creative process. The Rolleiflex grounds me 
                  in the tradition of street photography, forcing me to slow down and compose carefully through its waist-level 
                  finder. The Fuji G617 opens up landscapes in ways that no other format can, creating images that feel 
                  cinematic and grand.
                </p>
                <p className="mb-6">
                  The Hasselblad XPan bridges these worlds, offering both intimate standard frames and sweeping panoramas 
                  on the same roll of film. This versatility makes it perfect for travel and documentary work, where 
                  the story might call for different formats within the same series.
                </p>
                <p>
                  Working with film cameras has taught me patience, intentionality, and the value of each frame. 
                  In our digital age, these analog tools remind us that photography is as much about the process 
                  as it is about the result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-light mb-6">
              See These Cameras in Action
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Follow my photography journey and see images captured with each of these incredible cameras.
            </p>
            <a
              href="https://instagram.com/light_on_texture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @light_on_texture
            </a>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* Lightbox */}
        {selectedImage && selectedEquipment && (
          <ImageLightbox
            images={[selectedImage]}
            currentIndex={0}
            isOpen={selectedImage !== null}
            onClose={closeLightbox}
            onNext={() => {}}
            onPrevious={() => {}}
            alt={selectedEquipment.name}
          />
        )}
      </main>
    </PageTransition>
  );
};

export default EquipmentPage;