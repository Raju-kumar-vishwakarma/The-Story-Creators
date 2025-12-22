import React, { useState } from "react";
import { assets } from "../assets/assets";
import MainLoader from "../components/MainLoader";

const categories = [
	{
		id: "wedding",
		title: "Weeding",
		images: [
			{ key: "wedding1", src: "wedding1" },
			{ key: "wedding2", src: "wedding2" },
		],
	},
	{
		id: "pre-wedding",
		title: "Pre Wedding",
		images: [
			{ key: "PreWedding1", src: "PreWedding1" },
			{ key: "PreWedding2", src: "PreWedding2" },
		],
	},
	{
		id: "engagement",
		title: "Engagement",
		images: [
			{ key: "Engagement3", src: "Engagement3" },
			{ key: "Engagement2", src: "Engagement2" },
		],
	},
	{
		id: "haldi",
		title: "Haldi",
		images: [
			{ key: "Haldi1", src: "Haldi1" },
		],
	},
];

const OurWork = () => {
	const [loadedImages, setLoadedImages] = useState({});

	const handleImageLoad = (imageName) => {
		setLoadedImages(prev => ({ ...prev, [imageName]: true }));
	};



	return (
		<div className="min-h-screen bg-white">
			{/* Gallery Section */}
			<section className="w-full pt-10 md:pt-16 min-h-screen bg-white space-y-10 mt-20">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					{/* Map through all categories */}
					{categories.map((category) => (
						<div key={category.id} className="mb-16">
							<h2
								className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
								style={{ fontFamily: "'Great Vibes', cursive" }}
							>
								{category.title}
							</h2>

							{/* Gallery Grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
								{category.images.map((image) => (
									<div key={image.key} className="group">
										<a href="#" className="block">
											<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
												{!loadedImages[image.key] && <MainLoader />}
												<img
													src={assets[image.src]}
													alt={category.title}
													className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages[image.key] ? 'opacity-100' : 'opacity-0'}`}
													loading="lazy"
													onLoad={() => handleImageLoad(image.key)}
												/>
											</figure>
											<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
												{/* Category Title */}
											</h3>
										</a>
									</div>
								))}
							</div>

							{/* See All Button */}
							<div className="mt-8 flex justify-center">
								<a
									href={`/${category.id}`}
									className="px-5 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition"
								>
									See All
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default OurWork;