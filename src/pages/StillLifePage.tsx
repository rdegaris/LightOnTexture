import React from 'react';

const StillLifePage: React.FC = () => {
    // Array of image rows for the 4x4 grid (16 images total)
    const imageRows = [
        ['/still1.jpg', '/still2.jpg', '/still3.jpg', '/still4.jpg'],
        ['/still5.jpg', '/still6.jpg', '/still7.jpg', '/still8.jpg'],
        ['/still9.jpg', '/still10.jpg', '/still11.jpg', '/still12.jpg'],
        ['/still13.jpg', '/still14.jpg', '/still15.jpg', '/still16.jpg'],
    ];

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
                            {row.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                    <img
                                        src={image}
                                        alt={`Still Life ${rowIndex * 4 + imageIndex + 1}`}
                                        className="w-full object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 filter grayscale"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StillLifePage;
