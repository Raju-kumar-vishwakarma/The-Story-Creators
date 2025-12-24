import React, { useState } from "react";
import { assets, birthdayImages } from "../assets/assets";
import MainLoader from "../components/MainLoader";
import ImageViewer from "../components/ImageViewer";


const Birthday = () => {
    const [loadedImages, setLoadedImages] = useState({});
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageUrls = birthdayImages.map(img => assets[img.src]);

    const handleImageLoad = (imageName) => {
        setLoadedImages(prev => ({ ...prev, [imageName]: true }));
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
    };

    const handlePrev = () => {
        setCurrentImageIndex(prev => (prev === 0 ? imageUrls.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex(prev => (prev === imageUrls.length - 1 ? 0 : prev + 1));
    };



    return (
        <div className="min-h-screen bg-white">
            {/* Gallery Section */}
            <section className="w-full mb-15 pt-10 md:pt-16 min-h-screen bg-white space-y-10 mt-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
                    <div className="mb-16">
                        <h2
                            className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Birthday Gallery
                        </h2>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {birthdayImages.map((image, index) => (
                                <div key={image.key} className="group cursor-pointer" onClick={() => handleImageClick(index)}>
                                    <div className="block">
                                        <figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100 aspect-4/3">
                                            {!loadedImages[image.key] && <MainLoader />}
                                            <img
                                                src={assets[image.src]}
                                                alt="Birthday"
                                                className={`w-full h-full object-cover transition-opacity duration-500 ${loadedImages[image.key] ? 'opacity-100' : 'opacity-0'}`}
                                                loading="lazy"
                                                onLoad={() => handleImageLoad(image.key)}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ImageViewer
                    isOpen={isViewerOpen}
                    imageIndex={currentImageIndex}
                    images={imageUrls}
                    onClose={() => setIsViewerOpen(false)}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            </section>
        </div>
    );
};

export default Birthday;
