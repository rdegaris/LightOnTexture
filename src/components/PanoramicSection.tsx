import React from 'react';

const PanoramicSection: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side - Title */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-eurostile text-gray-900 tracking-wide">
                            Panoramic
                        </h2>
                    </div>
                    
                    {/* Right side - Description and button */}
                    <div className="space-y-6">
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                A series or Panoramic scenes taken on vintage film cameras, primarily the Hasselblad Xpan 
                                and the Fuji G617.
                            </p>
                            <p>
                                Film stocks include Black and White Ilford HP5 and Kodak. For color, I prefer to use Kodak 
                                Portra 160 and 400.
                            </p>
                        </div>
                        
                        <button className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 text-sm font-light tracking-wide transition-colors duration-200">
                            View Series
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PanoramicSection;
