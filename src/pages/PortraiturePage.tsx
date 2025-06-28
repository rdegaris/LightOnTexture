import React from 'react';

const PortraiturePage: React.FC = () => {
    // Array of image rows for the 4x4 grid (16 images total)
    const imageRows = [
        ['/port1.jpg', '/port2.jpg', '/port3.jpg', '/port4.jpg'],
        ['/port5.jpg', '/port6.jpg', '/port7.jpg', '/port8.jpg'],
        ['/port9.jpg', '/port10.jpg', '/port11.jpg', '/port12.jpg'],
        ['/port13.jpg', '/port14.jpg', '/port15.jpg', '/port16.jpg'],
    ];

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
                            {row.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                    <img
                                        src={image}
                                        alt={`Portrait ${rowIndex * 4 + imageIndex + 1}`}
                                        className="w-full object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200"
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

export default PortraiturePage;
