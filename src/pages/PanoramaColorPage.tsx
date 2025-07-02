import React, { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';
import { ImageWithLoading } from '../components/LoadingSpinner';

const PanoramaColorPage: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image pairs for the 5 rows
    const imageRows = [
        ['/gall1.jpg', '/gall2.jpg'],
        ['/gall3.jpg', '/gall4.jpg'],
        ['/gall5.jpg', '/gall6.jpg'],
        ['/gall7.jpg', '/gall8.jpg'],
        ['/gall9.jpg', '/gall10.jpg'],
    ];

    // Flatten the image array for lightbox navigation
    const allImages = imageRows.flat();

    // Image descriptions for better SEO and accessibility
    const imageDescriptions = [
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
        'Color panoramic landscape photograph - Hasselblad Xpan on Kodak Portra film',
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
                    "Film is just a waste of money. I can just add grain in Photoshop."
                </blockquote>
                <cite className="text-gray-600 text-sm font-light">— Anon</cite>
            </div>

            {/* Gallery Grid */}
            <div className="w-[90%] mx-auto px-4 md:px-8 pb-16">
                <div className="space-y-6">
                    {imageRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {row.map((image, imageIndex) => {
                                const globalIndex = rowIndex * 2 + imageIndex;
                                return (
                                    <div key={imageIndex} className="aspect-[3/1]">
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
                alt="Color panoramic photograph"
            />
        </div>
    );
};

export default PanoramaColorPage;
