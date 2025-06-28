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
                            <p className="text-xl md:text-2xl font-eurostile text-gray-900 leading-relaxed">
                                I: <a 
                                    href="https://instagram.com/lightontexture" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="underline hover:no-underline transition-all duration-200 font-eurostile"
                                >
                                    @lightontexture
                                </a>
                            </p>
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
