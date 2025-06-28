import React from 'react';

const PanoramaColorPage: React.FC = () => {
    // Array of image pairs for the 5 rows
    const imageRows = [
        ['/src/assets/gall1.jpg', '/src/assets/gall2.jpg'],
        ['/src/assets/gall3.jpg', '/src/assets/gall4.jpg'],
        ['/src/assets/gall5.jpg', '/src/assets/gall6.jpg'],
        ['/src/assets/gall7.jpg', '/src/assets/gall8.jpg'],
        ['/src/assets/gall9.jpg', '/src/assets/gall10.jpg'],
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Quote Section */}
            <div className="text-center py-16 px-4">
                <blockquote className="text-xl md:text-2xl font-light text-gray-900 max-w-4xl mx-auto mb-4">
                    "Film is just a waste of money. I can just add grain in Photoshop."
                </blockquote>
                <cite className="text-gray-600 text-sm font-light">— Anon</cite>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
                <div className="space-y-8">
                    {imageRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            {row.map((image, imageIndex) => (
                                <div key={imageIndex} className="aspect-w-16 aspect-h-10">
                                    <img
                                        src={image}
                                        alt={`Gallery image ${rowIndex * 2 + imageIndex + 1}`}
                                        className="w-full h-64 md:h-80 object-cover rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200"
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
