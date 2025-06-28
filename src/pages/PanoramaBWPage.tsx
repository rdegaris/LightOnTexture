import React from 'react';

const PanoramaBWPage: React.FC = () => {
    // Array of black and white images for the single row
    const images = [
        '/src/assets/home1.jpg',
        '/src/assets/home2.jpg',
        '/src/assets/home3.jpg',
        '/src/assets/home4.jpg'
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Quote Section */}
            <div className="text-center py-16 px-4">
                <blockquote className="text-xl md:text-2xl font-light text-gray-900 max-w-4xl mx-auto mb-4">
                    "Too much Black and White. You know color has been around for a while right?"
                </blockquote>
                <cite className="text-gray-600 text-sm font-light">— Anon</cite>
            </div>

            {/* Single Row Gallery */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`B&W Portrait ${index + 1}`}
                                className="w-full h-64 md:h-80 object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 filter grayscale"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PanoramaBWPage;
