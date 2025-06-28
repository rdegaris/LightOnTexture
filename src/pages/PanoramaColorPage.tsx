import React from 'react';

const PanoramaColorPage: React.FC = () => {
    // Array of image pairs for the 5 rows
    const imageRows = [
        ['/gall1.jpg', '/gall2.jpg'],
        ['/gall3.jpg', '/gall4.jpg'],
        ['/gall5.jpg', '/gall6.jpg'],
        ['/gall7.jpg', '/gall8.jpg'],
        ['/gall9.jpg', '/gall10.jpg'],
    ];

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
                <div className="space-y-8">
                    {imageRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            {row.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                    <img
                                        src={image}
                                        alt={`Gallery image ${rowIndex * 2 + imageIndex + 1}`}
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

export default PanoramaColorPage;
