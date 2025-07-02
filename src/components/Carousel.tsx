import React, { useState, useEffect, useRef } from 'react';
import { ImageWithLoading } from './LoadingSpinner';

const Carousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);
    
    // Placeholder images - you can replace these with actual image paths
    const images = [
        '/home1.jpg',
        '/home2.jpg',
        '/home3.jpg',
        '/home4.jpg',
        '/home5.jpg',
        '/home6.jpg',
        '/home7.jpg'
    ];

    // Image descriptions for better SEO
    const imageDescriptions = [
        'Featured photography - San Diego film photographer Ryan de Garis',
        'Featured photography - San Diego film photographer Ryan de Garis',
        'Featured photography - San Diego film photographer Ryan de Garis',
        'Featured photography - San Diego film photographer Ryan de Garis',
        'Featured photography - San Diego film photographer Ryan de Garis',
        'Featured photography - San Diego film photographer Ryan de Garis',
        'Featured photography - San Diego film photographer Ryan de Garis'
    ];

    // Auto-advance carousel every 5 seconds when auto-playing
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % images.length);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Touch event handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        // Reset touch positions
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    return (
        <div className="relative w-[90%] mx-auto px-4 md:px-8 py-8">
            {/* Main carousel container */}
            <div 
                className="relative overflow-hidden rounded-lg bg-gray-100"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <ImageWithLoading
                                src={image}
                                alt={imageDescriptions[index]}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                
                {/* Navigation arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Auto-play indicator */}
                <div className="absolute top-4 right-4">
                    <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'} opacity-60`} />
                </div>
            </div>
            
            {/* Dot indicators */}
            <div className="flex justify-center space-x-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                            index === currentSlide 
                                ? 'bg-gray-800 scale-110' 
                                : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Mobile swipe hint */}
            <div className="text-center mt-4 md:hidden">
                <p className="text-xs text-gray-500">Swipe left or right to navigate</p>
            </div>
        </div>
    );
};

export default Carousel;
