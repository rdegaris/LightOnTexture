import React from 'react';

const PanoramaBWPage: React.FC = () => {
    // Array of panoramic black and white images for 2x7 grid
    const images = [
        '/src/assets/pan1.jpg',
        '/src/assets/pan2.jpg',
        '/src/assets/pan3.jpg',
        '/src/assets/pan4.jpg',
        '/src/assets/pan5.jpg',
        '/src/assets/pan6.jpg',
        '/src/assets/pan7.jpg',
        '/src/assets/pan8.jpg',
        '/src/assets/pan9.jpg',
        '/src/assets/pan10.jpg',
        '/src/assets/pan11.jpg',
        '/src/assets/pan12.jpg',
        '/src/assets/pan13.jpg',
        '/src/assets/pan14.jpg'
    ];

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
            <div className="w-[90%] mx-auto px-4 md:px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`B&W Panorama ${index + 1}`}
                                className="w-full object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 filter grayscale"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Centered Bottom Image */}
            <div className="w-[90%] mx-auto px-4 md:px-8 pb-16">
                <div className="flex justify-center">
                    <div>
                        <img
                            src="/src/assets/pan15.jpg"
                            alt="B&W Panorama 15"
                            className="object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 filter grayscale"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PanoramaBWPage;
