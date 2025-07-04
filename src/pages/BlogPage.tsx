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
                    <div className="text-sm text-gray-600 space-y-2">
                        <p><strong>Camera:</strong> Canon 50E (35mm point-and-shoot)</p>
                        <p><strong>Film:</strong> Kodak Gold 200 (expired ~10 years)</p>
                        <p><strong>Location:</strong> Old Town Temecula, California</p>
                        <p><strong>Processing:</strong> Standard C-41 development</p>
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
