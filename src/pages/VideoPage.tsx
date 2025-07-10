import React, { useState, useRef, useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const VideoPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // S3 video URL - you may need to adjust the region and make the bucket public or use a pre-signed URL
  const videoUrl = "https://exportedvids.s3.us-west-2.amazonaws.com/DavesBoat.mp4";

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setError("Unable to load video. Please check if the S3 bucket is publicly accessible or if you need authentication.");
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Video Gallery
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Experience photography in motion. Behind-the-scenes moments and creative processes 
                captured through the lens of cinematic storytelling.
              </p>
            </div>
          </div>
        </header>

        {/* Video Section */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Video Container */}
            <div className="relative bg-black">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Loading video...</p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-white text-center max-w-md px-4">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                className="w-full h-auto"
                controls
                preload="metadata"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23000'/%3E%3C/svg%3E"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Dave's Boat
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  A cinematic journey capturing the essence of maritime photography. 
                  This video showcases the interplay between light, water, and the timeless 
                  beauty of nautical subjects through the lens.
                </p>
                <p className="mb-4">
                  Shot with analog film cameras, this piece demonstrates the unique 
                  aesthetic qualities that can only be achieved through traditional 
                  photographic processes and careful attention to natural lighting conditions.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h3 className="font-medium text-gray-900 mb-2">Technical Details</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Format: MP4 (H.264)</li>
                    <li>• Source: AWS S3 Streaming</li>
                    <li>• Quality: High Definition</li>
                    <li>• Controls: Play, Pause, Seek, Volume, Fullscreen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-light text-gray-900 mb-4">
                About Video Content
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This video represents an exploration of motion in photography, 
                bridging the gap between still images and cinematic storytelling. 
                Each frame is composed with the same careful attention to light 
                and texture that defines my photographic work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-light text-gray-900 mb-4">
                Behind the Scenes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating video content with analog sensibilities requires a 
                different approach to capturing movement and time. This piece 
                demonstrates how traditional photographic principles can be 
                applied to moving images.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-light mb-6">
              Explore More Visual Stories
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover the full range of photographic work, from panoramic landscapes 
              to intimate portraits, all captured with analog film cameras.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/panorama-bw"
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                View Panoramas
              </a>
              <a
                href="/equipment"
                className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                See Equipment
              </a>
            </div>
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
      </main>
    </PageTransition>
  );
};

export default VideoPage;
