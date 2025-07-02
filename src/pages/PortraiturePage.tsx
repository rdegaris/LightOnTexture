import React, { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';
import { ImageWithLoading } from '../components/LoadingSpinner';

const PortraiturePage: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image rows for the 4x4 grid (16 images total)
    const imageRows = [
        ['/port1.jpg', '/port2.jpg', '/port3.jpg', '/port4.jpg'],
        ['/port5.jpg', '/port6.jpg', '/port7.jpg', '/port8.jpg'],
        ['/port9.jpg', '/port10.jpg', '/port11.jpg', '/port12.jpg'],
        ['/port13.jpg', '/port14.jpg', '/port15.jpg', '/port16.jpg'],
    ];

    // Flatten the image array for lightbox navigation
    const allImages = imageRows.flat();

    // Image descriptions for better SEO and accessibility
    const imageDescriptions = [
        'Portrait photograph on film - Subject 1',
        'Portrait photograph on film - Subject 2', 
        'Portrait photograph on film - Subject 3',
        'Portrait photograph on film - Subject 4',
        'Portrait photograph on film - Subject 5',
        'Portrait photograph on film - Subject 6',
        'Portrait photograph on film - Subject 7',
        'Portrait photograph on film - Subject 8',
        'Portrait photograph on film - Subject 9',
        'Portrait photograph on film - Subject 10',
        'Portrait photograph on film - Subject 11',
        'Portrait photograph on film - Subject 12',
        'Portrait photograph on film - Subject 13',
        'Portrait photograph on film - Subject 14',
        'Portrait photograph on film - Subject 15',
        'Portrait photograph on film - Subject 16',
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
                    "Too much Black and White. You know color has been around for a while right?"
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
                alt="Portrait photograph"
            />
        </div>
    );
};

export default PortraiturePage;
