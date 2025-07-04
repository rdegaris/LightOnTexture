import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto gap-4 md:gap-0">
                <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-eurostile font-bold tracking-tight text-gray-900 hover:text-gray-700 transition-colors focus:outline-none">
                    LightOnTexture
                </Link>
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-sm md:text-base font-bold">
                        <li>
                            <Link 
                                to="/panorama-bw" 
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap focus:outline-none ${
                                    isActive('/panorama-bw') ? 'active' : ''
                                }`}
                            >
                                Panorama (B&W)
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/panorama-color" 
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap focus:outline-none ${
                                    isActive('/panorama-color') ? 'active' : ''
                                }`}
                            >
                                Panorama (Color)
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/portraiture" 
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors focus:outline-none ${
                                    isActive('/portraiture') ? 'active' : ''
                                }`}
                            >
                                Portraiture
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/still-life" 
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap focus:outline-none ${
                                    isActive('/still-life') ? 'active' : ''
                                }`}
                            >
                                Still Life
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors focus:outline-none ${
                                    isActive('/about') ? 'active' : ''
                                }`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/blog" 
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors focus:outline-none ${
                                    isActive('/blog') ? 'active' : ''
                                }`}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <a 
                                href="https://lightontexture.darkroom.com/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap focus:outline-none`}
                            >
                                Buy Prints
                            </a>
                        </li>
                        <li>
                            <Link 
                                to="/art-prints" 
                                className={`nav-link text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap focus:outline-none ${
                                    isActive('/art-prints') ? 'active' : ''
                                }`}
                            >
                                Art Prints
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;