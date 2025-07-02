import React, { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';
import { ImageWithLoading } from '../components/LoadingSpinner';

const PanoramaBWPage: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of panoramic black and white images for 2x7 grid
    const images = [
        '/pan1.jpg',
        '/pan2.jpg',
        '/pan3.jpg',
        '/pan4.jpg',
        '/pan5.jpg',
        '/pan6.jpg',
        '/pan7.jpg',
        '/pan8.jpg',
        '/pan9.jpg',
        '/pan10.jpg',
        '/pan11.jpg',
        '/pan12.jpg',
        '/pan13.jpg',
        '/pan14.jpg',
        '/pan15.jpg'
    ];

    // All images for lightbox (including the bottom centered image)
    const allImages = images;

    // Image descriptions for better SEO and accessibility
    const imageDescriptions = [
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
        'Black and white panoramic landscape photograph - Hasselblad Xpan on Ilford HP5 film',
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
                    "Not impressed. I can take panoramas on my iPhone."
                </blockquote>
                <cite className="text-gray-600 text-sm font-light">— Anon</cite>
            </div>

            {/* 2x7 Grid Gallery */}
            <div className="w-[90%] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.slice(0, 14).map((image, index) => (
                        <div key={index} className="aspect-[3/1]">
                            <ImageWithLoading
                                src={image}
                                alt={imageDescriptions[index]}
                                className="w-full h-full filter grayscale"
                                onClick={() => openLightbox(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Centered Bottom Image */}
            <div className="w-[90%] mx-auto px-4 md:px-8 pb-16 pt-6">
                <div className="flex justify-center">
                    <div className="max-w-4xl aspect-[3/1]">
                        <ImageWithLoading
                            src="/pan15.jpg"
                            alt={imageDescriptions[14]}
                            className="w-full h-full filter grayscale"
                            onClick={() => openLightbox(14)}
                        />
                    </div>
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
                alt="Black and white panoramic photograph"
            />
        </div>
    );
};

export default PanoramaBWPage;
