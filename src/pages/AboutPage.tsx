import React, { useState } from 'react';

const AboutPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, lastName, email, message } = formData;
        const fullName = `${firstName} ${lastName}`.trim();
        const subject = `Contact from ${fullName}`;
        const body = `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:ryan@lightontexture.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="w-[90%] mx-auto px-4 md:px-8 py-16">
                {/* Top section - Image and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                    {/* Left side - Image */}
                    <div>
                        <img
                            src="/about.jpg"
                            alt="About Ryan de Garis"
                            className="w-full h-auto object-cover rounded-sm shadow-lg"
                        />
                    </div>
                    
                    {/* Right side - Content */}
                    <div>
                        <div>
                            <p className="text-xl md:text-2xl font-eurostile text-gray-900 leading-relaxed mb-8">
                                I'm a hobbyist film photographer and home developer based in San Diego, California.
                            </p>
                            <p className="text-xl md:text-2xl font-eurostile text-gray-900 leading-relaxed mb-8">
                                Contact me to collaborate, book a session or purchase gallery quality framed prints.
                            </p>
                            <p className="text-xl md:text-2xl font-eurostile text-gray-900 leading-relaxed mb-8">
                                Contact me to collaborate, book a session or purchase gallery quality framed prints.
                            </p>
                            <p className="text-xl md:text-2xl font-eurostile text-gray-900 leading-relaxed mb-8">
                                I: <a 
                                    href="https://instagram.com/lightontexture" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="underline hover:no-underline transition-all duration-200 font-eurostile"
                                >
                                    @lightontexture
                                </a>
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-lg text-gray-700 mb-4">
                                    <strong>Quick Contact:</strong> Send me a direct message on Instagram for the fastest response.
                                </p>
                                <a 
                                    href="https://instagram.com/lightontexture" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    <span>Message me on Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section - Contact Form */}
                <div className="max-w-2xl">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-light text-gray-700 mb-2">
                                Name (required)
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-light text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-light text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                                Email (required)
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                                Message (required)
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-vertical"
                            />
                        </div>
                        
                        <button
                            type="submit"
                            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 text-sm font-light tracking-wide transition-colors duration-200 rounded-sm"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
