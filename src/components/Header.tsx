import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 md:gap-0">
                <Link to="/" className="text-2xl md:text-3xl logo-font font-bold tracking-tight text-gray-900 hover:text-gray-700 transition-colors">
                    LightOnTexture
                </Link>
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-xs md:text-sm font-light">
                        <li><Link to="/panorama-bw" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Panorama (B&W)</Link></li>
                        <li><Link to="/panorama-color" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Panorama (Color)</Link></li>
                        <li><Link to="/portraiture" className="text-gray-700 hover:text-gray-900 transition-colors">Portraiture</Link></li>
                        <li><Link to="/still-life" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Still Life</Link></li>
                        <li><Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link></li>
                        <li><Link to="/buy-prints" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Buy Prints</Link></li>
                        <li><Link to="/art-prints" className="text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">Art Prints</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;