import React, { useState } from 'react';
import ImageLightbox from '../components/ImageLightbox';
import { ImageWithLoading } from '../components/LoadingSpinner';

const BlogPage: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Blog images from the 50e folder
    const images = [
        '/blog/50e/000425650017.jpg',
        '/blog/50e/000425650015.jpg',
        '/blog/50e/000425650016.jpg',
        '/blog/50e/000425650018.jpg',
        '/blog/50e/000425650022.jpg',
        '/blog/50e/000425650027-2.jpg'
    ];

    const openLightbox = (imageIndex: number) => {
        setCurrentImageIndex(imageIndex);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="text-center py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-eurostile text-gray-900 mb-4">
                    Expired Dreams: Canon 50E in Old Town Temecula
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    A journey through time with vintage glass and forgotten emulsion
                </p>
            </div>

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
                {/* Opening Image */}
                <div className="mb-12">
                    <ImageWithLoading
                        src={images[0]}
                        alt="Old Town Temecula street scene captured with Canon 50E on expired film"
                        className="w-full rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox(0)}
                    />
                </div>

                {/* Article Content */}
                <div className="max-w-none">
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        There's something magical about wandering through Old Town Temecula with a camera that's older than most of the tourists. 
                        The Canon 50E, a humble point-and-shoot from the late 1980s, sits perfectly in your palm—a reminder of when photography 
                        required patience, when every frame counted, and when the magic happened in the darkroom, not on a screen.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        But this wasn't just any ordinary film day. Tucked into my bag was a roll of Kodak Gold that had been sitting in a drawer 
                        for nearly a decade, its expiration date a distant memory. Expired film is like a time capsule—you never know what stories 
                        it will tell, what colors it will shift, or what grain structure will emerge from its chemical decay.
                    </p>

                    {/* Grid of 3 images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                        {images.slice(1, 4).map((image, index) => (
                            <div key={index} className="aspect-[4/3]">
                                <ImageWithLoading
                                    src={image}
                                    alt={`Old Town Temecula captured with Canon 50E on expired film - Image ${index + 2}`}
                                    className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer"
                                    onClick={() => openLightbox(index + 1)}
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        The Canon 50E's fixed 35mm lens captures the world with an honest simplicity that modern cameras, with all their 
                        computational wizardry, sometimes struggle to achieve. There's no chimping, no instant gratification—just the mechanical 
                        whir of the film advance and the satisfying click of the shutter. Each frame is a commitment, a decision made in the moment 
                        and trusted to chemistry and time.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Old Town Temecula, with its weathered wooden facades and dusty streets, proved to be the perfect subject for this experiment. 
                        The expired film added an unpredictable character—colors shifted toward amber and magenta, grain became more pronounced, 
                        and contrast took on a life of its own. What emerged wasn't just documentation of a place, but a collaboration between 
                        photographer, camera, and the passage of time itself.
                    </p>

                    {/* Large center image */}
                    <div className="my-12">
                        <ImageWithLoading
                            src={images[4]}
                            alt="Atmospheric Old Town Temecula scene with expired film characteristics"
                            className="w-full rounded-lg shadow-lg cursor-pointer"
                            onClick={() => openLightbox(4)}
                        />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        There's a lesson in this approach that transcends photography. In our rush toward higher resolution, faster processors, 
                        and more perfect images, we sometimes lose sight of the imperfections that make art compelling. The Canon 50E doesn't 
                        apologize for its limitations—it embraces them, and in doing so, it forces you to see differently.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        The expired film's unpredictability becomes part of the narrative. Each frame carries the weight of time, the evidence 
                        of chemical breakdown, the beautiful accidents that no algorithm can replicate. It's a reminder that sometimes the best 
                        art comes not from controlling every variable, but from learning to dance with uncertainty.
                    </p>

                    {/* Final image */}
                    <div className="my-12">
                        <ImageWithLoading
                            src={images[5]}
                            alt="Final frame from Old Town Temecula Canon 50E session"
                            className="w-full rounded-lg shadow-lg cursor-pointer"
                            onClick={() => openLightbox(5)}
                        />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        As the afternoon sun filtered through the old oak trees lining the main street, I found myself slowing down, 
                        really looking at the world through the Canon's viewfinder. The expired film had taught me patience—not just 
                        in waiting for the results, but in the act of seeing itself. Each potential frame became a question: Is this 
                        worth the silver halide? Is this moment worth preserving in its imperfect, expired glory?
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        In an age of infinite digital frames and instant sharing, there's something profound about the finite nature of film—
                        especially film that carries the weight of time in its very emulsion. The Canon 50E and its roll of expired dreams 
                        didn't just capture Old Town Temecula; they captured a philosophy, a way of seeing that values intention over 
                        abundance, character over perfection, and the beautiful accidents that make life worth living.
                    </p>
                </div>

                {/* Metadata */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="text-sm text-gray-600 space-y-2 mb-8">
                        <p><strong>Camera:</strong> Canon 50E (35mm point-and-shoot)</p>
                        <p><strong>Film:</strong> Kodak Gold 200 (expired ~10 years)</p>
                        <p><strong>Location:</strong> Old Town Temecula, California</p>
                        <p><strong>Processing:</strong> Standard C-41 development</p>
                    </div>
                    
                    {/* Contact CTA */}
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <p className="text-lg text-gray-700 mb-4">
                            Enjoyed this post? Let's connect and talk photography!
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

            {/* Image Lightbox */}
            <ImageLightbox
                images={images}
                currentIndex={currentImageIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrevious={previousImage}
                alt="Canon 50E expired film photography in Old Town Temecula"
            />
        </div>
    );
};

export default BlogPage;
