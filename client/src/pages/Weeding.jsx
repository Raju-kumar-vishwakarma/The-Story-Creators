import React, { useState } from "react";
import { assets, weddingImages } from "../assets/assets";
import MainLoader from "../components/MainLoader";


const Weeding = () => {
    const [loadedImages, setLoadedImages] = useState({});

    const handleImageLoad = (imageName) => {
        setLoadedImages(prev => ({ ...prev, [imageName]: true }));
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
                            Wedding Gallery
                        </h2>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {weddingImages.map((image) => (
                                <div key={image.key} className="group">
                                    <div className="block">
                                        <figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100 aspect-[4/3]">
                                            {!loadedImages[image.key] && <MainLoader />}
                                            <img
                                                src={assets[image.src]}
                                                alt="Wedding"
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
            </section>
        </div>
    );
};

export default Weeding;
