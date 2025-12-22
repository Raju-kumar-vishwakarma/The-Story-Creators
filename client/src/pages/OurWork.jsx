import React, { useState } from "react";
import { assets } from "../assets/assets";

const OurWork = () => {
	const [loadedImages, setLoadedImages] = useState({});

	const handleImageLoad = (imageName) => {
		setLoadedImages(prev => ({ ...prev, [imageName]: true }));
	};

	const ImageLoader = () => (
		<div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
			<div className="flex flex-col items-center gap-2">
				<div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
				<p className="text-sm text-gray-500">Loading...</p>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-white">

			{/* Gallery Section */}
			<section className="w-full mb-15 py-10 md:py-10 min-h-screen bg-white space-y-10 mt-20">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					{/* Wedding Section */}
					<div className="mb-16 mt-3">
						<h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
						style={{ fontFamily: "'Great Vibes', cursive" }}
						>Weeding</h2>

						{/* Wedding Gallery Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

							<div className="group">
								<a href="#" className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['#WEDDING'] && <ImageLoader />}
										<img
											src={assets.wedding1}
											alt="#WEDDING"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['#WEDDING'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('#WEDDING')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										{/* WEDDING */}
									</h3>
								</a>
							</div>

							<div className="group">
								<a href="#" className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['#WEDDING'] && <ImageLoader />}
										<img
											src={assets.wedding2}
											alt="#WEDDING"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['#WEDDING'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('#WEDDING')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										{/* WEDDING */}
									</h3>
								</a>
							</div>
						</div>

						{/* See All Button */}
						<div className="mt-8 flex justify-center">
							<a
								href="/"
								className="px-5 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
							>
								See All
							</a>
						</div>
					</div>



					{/* Pre Wedding Section */}
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
						style={{ fontFamily: "'Great Vibes', cursive" }}
						>Pre Wedding</h2>

						{/* Pre Wedding Gallery Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

							<div className="group">
								<a href="#" className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['#Pre Wedding'] && <ImageLoader />}
										<img
											src={assets.PreWedding1}
											alt="#Pre Wedding"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['#Pre Wedding'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('#Pre Wedding')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										{/* #Pre Wedding */}
									</h3>
								</a>
							</div>


							<div className="group">
								<a href="#" className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['#Pre Wedding'] && <ImageLoader />}
										<img
											src={assets.PreWedding2}
											alt="#Pre Wedding"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['#Pre Wedding'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('#Pre Wedding')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										{/* #Pre Wedding */}
									</h3>
								</a>
							</div>
						</div>

						{/* See All Button */}
						<div className="mt-8 flex justify-center">
							<a
								href="/"
								className="px-5 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
							>
								See All
							</a>
						</div>
					</div>

					{/* Engagement Section */}
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
						style={{ fontFamily: "'Great Vibes', cursive" }}
						>Engagement</h2>

						{/* Engagement Gallery Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

							<div className="group">
								<a href="#" className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['#Engagement'] && <ImageLoader />}
										<img
											src={assets.Engagement3}
											alt="#Engagement"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['#Engagement'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('#Engagement')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										{/* #Engagement */}
									</h3>
								</a>
							</div>


							<div className="group">
								<a href="#" className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['#Engagement'] && <ImageLoader />}
										<img
											src={assets.Engagement2}
											alt="#Engagement"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['#Engagement'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('#Engagement')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										{/* #Engagement */}
									</h3>
								</a>
							</div>
						</div>

						{/* See All Button */}
						<div className="mt-8 flex justify-center">
							<a
								href="/"
								className="px-5 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
							>
								See All
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OurWork;
