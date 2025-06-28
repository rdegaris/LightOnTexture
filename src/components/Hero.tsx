import React from 'react';
import Carousel from './Carousel';

const Hero: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Subtitle section */}
            <div className="text-center py-12 md:py-16">
                <h2 className="text-xl md:text-2xl font-light tracking-wider text-gray-900">San Diego Film Photographer</h2>
            </div>
            
            {/* Carousel */}
            <Carousel />
        </div>
    );
};

export default Hero;