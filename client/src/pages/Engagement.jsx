import React, { useState } from "react";
import { assets } from "../assets/assets";
import MainLoader from "../components/MainLoader";

const engagementImages = [
    { key: "Engagement1", src: "engagement1" },
    { key: "Engagement2", src: "engagement2" },
    { key: "Engagement3", src: "engagement3" },
    { key: "Engagement4", src: "engagement4" },
    { key: "Engagement5", src: "engagement5" },
    { key: "Engagement6", src: "engagement6" },
];

const Engagement = () => {
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
                            style={{ fontFamily: "'Great Vibes', cursive" }}
                        >
                            Engagement Gallery
                        </h2>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {engagementImages.map((image) => (
                                <div key={image.key} className="group">
                                    <div className="block">
                                        <figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100 aspect-[4/3]">
                                            {!loadedImages[image.key] && <MainLoader />}
                                            <img
                                                src={assets[image.src]}
                                                alt="Engagement"
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

export default Engagement;
