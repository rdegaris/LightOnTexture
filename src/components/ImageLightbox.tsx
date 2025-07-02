import React, { useEffect, useCallback, useState } from 'react';

interface ImageLightboxProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
    alt?: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNext,
    onPrevious,
    alt = "Gallery image"
}) => {
    // Handle keyboard navigation
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (!isOpen) return;

        switch (event.key) {
            case 'Escape':
                onClose();
                break;
            case 'ArrowLeft':
                onPrevious();
                break;
            case 'ArrowRight':
                onNext();
                break;
        }
    }, [isOpen, onClose, onNext, onPrevious]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Touch/swipe support for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && images.length > 1) {
            onNext();
        }
        if (isRightSwipe && images.length > 1) {
            onPrevious();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-70 rounded"
                aria-label="Close lightbox"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-60 text-white text-sm font-light bg-black bg-opacity-50 px-3 py-1 rounded">
                {currentIndex + 1} / {images.length}
            </div>

            {/* Previous button */}
            {images.length > 1 && (
                <button
                    onClick={onPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-70 rounded"
                    aria-label="Previous image"
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Next button */}
            {images.length > 1 && (
                <button
                    onClick={onNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-70 rounded"
                    aria-label="Next image"
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}

            {/* Main image - fix vertical centering */}
            <div className="flex items-center justify-center w-full h-full min-h-0 min-w-0">
                <img
                    src={images[currentIndex]}
                    alt={`${alt} ${currentIndex + 1}`}
                    className="max-w-[90vw] max-h-[80vh] object-contain focus:outline-none z-50"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                />
            </div>

            {/* Background overlay - click to close */}
            <div
                className="absolute inset-0 z-40"
                onClick={onClose}
                aria-label="Close lightbox"
            />

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60 text-white text-sm font-light text-center bg-black bg-opacity-50 px-4 py-2 rounded">
                <p className="hidden md:block">Use arrow keys or click arrows to navigate • Press ESC to close</p>
                <p className="md:hidden">Swipe to navigate • Tap to close</p>
            </div>
        </div>
    );
};

export default ImageLightbox;
