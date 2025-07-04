import React, { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';
import { ImageWithLoading } from '../components/LoadingSpinner';

const StillLifePage: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image rows for the 4x4 grid (16 images total)
    const imageRows = [
        ['/still1.jpg', '/still2.jpg', '/still3.jpg', '/still4.jpg'],
        ['/still5.jpg', '/still6.jpg', '/still7.jpg', '/still8.jpg'],
        ['/still9.jpg', '/still10.jpg', '/still11.jpg', '/still12.jpg'],
        ['/still13.jpg', '/still14.jpg', '/still15.jpg', '/still16.jpg'],
    ];

    // Flatten the image array for lightbox navigation
    const allImages = imageRows.flat();

    // Image descriptions for better SEO and accessibility
    const imageDescriptions = [
        'Still life photograph on film - artistic composition 1',
        'Still life photograph on film - artistic composition 2',
        'Still life photograph on film - artistic composition 3',
        'Still life photograph on film - artistic composition 4',
        'Still life photograph on film - artistic composition 5',
        'Still life photograph on film - artistic composition 6',
        'Still life photograph on film - artistic composition 7',
        'Still life photograph on film - artistic composition 8',
        'Still life photograph on film - artistic composition 9',
        'Still life photograph on film - artistic composition 10',
        'Still life photograph on film - artistic composition 11',
        'Still life photograph on film - artistic composition 12',
        'Still life photograph on film - artistic composition 13',
        'Still life photograph on film - artistic composition 14',
        'Still life photograph on film - artistic composition 15',
        'Still life photograph on film - artistic composition 16',
    ];

    const openLightbox = (imageIndex: number) => {
        setCurrentImageIndex(imageIndex);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Quote Section */}
            <div className="text-center py-16 px-4">
                <blockquote className="text-xl md:text-2xl font-eurostile text-gray-900 max-w-4xl mx-auto mb-4">
                    "This stuff is boring. Just take pictures of people."
                </blockquote>
                <cite className="text-gray-600 text-sm font-light">— Anon</cite>
            </div>

            {/* Gallery Grid - 4x4 */}
            <div className="w-[90%] mx-auto px-4 md:px-8 pb-16">
                <div className="space-y-6">
                    {imageRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {row.map((image, imageIndex) => {
                                const globalIndex = rowIndex * 4 + imageIndex;
                                return (
                                    <div key={imageIndex} className="aspect-square">
                                        <ImageWithLoading
                                            src={image}
                                            alt={imageDescriptions[globalIndex]}
                                            className="w-full h-full"
                                            onClick={() => openLightbox(globalIndex)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Lightbox */}
            <ImageLightbox
                images={allImages}
                currentIndex={currentImageIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrevious={previousImage}
                alt="Still life photograph"
            />
        </div>
    );
};

export default StillLifePage;
