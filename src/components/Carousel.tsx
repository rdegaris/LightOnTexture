import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Placeholder images - you can replace these with actual image paths
    const images = [
        '/src/assets/home1.jpg',
        '/src/assets/home2.jpg',
        '/src/assets/home3.jpg',
        '/src/assets/home4.jpg',
        '/src/assets/home5.jpg',
        '/src/assets/home6.jpg',
        '/src/assets/home7.jpg'
    ];

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-[90%] mx-auto px-4 md:px-8 py-8">
            {/* Main carousel container */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                
                {/* Navigation arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-200"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-200"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            
            {/* Dot indicators */}
            <div className="flex justify-center space-x-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentSlide 
                                ? 'bg-gray-800' 
                                : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
