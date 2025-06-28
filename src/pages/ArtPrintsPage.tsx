import React, { useState } from 'react';

const ArtPrintsPage: React.FC = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const sizes = [
        { value: '8x26', label: '8x26' },
        { value: '16x48', label: '16x48' },
        { value: '24x72', label: '24x72' }
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="w-[90%] mx-auto px-4 md:px-8 py-16">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <span className="text-gray-600 text-sm">Art Prints › Carlsbad Train Station</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side - Image */}
                    <div>
                        <img
                            src="/home6.jpg"
                            alt="Carlsbad Train Station"
                            className="w-full object-cover rounded-sm"
                        />
                    </div>
                    
                    {/* Right side - Product Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-eurostile text-gray-900 mb-4">
                                Carlsbad Train Station
                            </h1>
                            <p className="text-xl text-gray-900 mb-6">from $140.00</p>
                            
                            <div className="space-y-4 text-gray-700 mb-8">
                                <p>Vintage train station in Carlsbad, California, shot on Hasselblad Xpan</p>
                                <p>These are art prints with Gallery Acrylic Facemount. Contact for framing options.</p>
                                <p className="font-medium">Limited Edition of 10</p>
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">SIZE:</label>
                            <select 
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            >
                                <option value="">SELECT SIZE</option>
                                {sizes.map((size) => (
                                    <option key={size.value} value={size.value}>
                                        {size.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Quantity:</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-20 px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            />
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full bg-gray-400 text-white py-4 px-8 text-sm font-medium tracking-wide rounded-sm hover:bg-gray-500 transition-colors duration-200">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtPrintsPage;
