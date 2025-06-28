import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 md:gap-0">
                <h1 className="text-2xl md:text-3xl logo-font font-bold tracking-tight text-gray-900">LightOnTexture</h1>
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-xs md:text-sm font-light">
                        <li><a href="#panorama-bw" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Panorama (B&W)</a></li>
                        <li><a href="#panorama-color" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Panorama (Color)</a></li>
                        <li><a href="#portraiture" className="text-gray-700 hover:text-gray-900 transition-colors">Portraiture</a></li>
                        <li><a href="#still-life" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Still Life</a></li>
                        <li><a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a></li>
                        <li><a href="#buy-prints" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Buy Prints</a></li>
                        <li><a href="#art-prints" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Art Prints</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;