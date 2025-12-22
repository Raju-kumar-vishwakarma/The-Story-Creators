import React, { useState } from "react";
import { assets } from "../assets/assets";
import MainLoader from "../components/MainLoader";

const haldiImages = [
    { key: "Haldi1", src: "Haldi1" },
    { key: "Haldi2", src: "Haldi2" },
    { key: "Haldi3", src: "Haldi3" },
    { key: "Haldi4", src: "Haldi4" },
    { key: "Haldi5", src: "Haldi5" },
    { key: "Haldi6", src: "Haldi6" },
    { key: "Haldi7", src: "Haldi7" },
    { key: "Haldi8", src: "Haldi8" },
    { key: "Haldi9", src: "Haldi9" },
    { key: "Haldi10", src: "Haldi10" },
];

const Haldi = () => {
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
                            className="text-4xl md:text-6xl font-bold text-black mb-12 text-center"
                            style={{ fontFamily: "'Great Vibes', cursive" }}
                        >
                            Haldi Gallery
                        </h2>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {haldiImages.map((image) => (
                                <div key={image.key} className="group">
                                    <div className="block">
                                        <figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100 aspect-[4/3]">
                                            {!loadedImages[image.key] && <MainLoader />}
                                            <img
                                                src={assets[image.src]}
                                                alt="Haldi"
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

export default Haldi;
