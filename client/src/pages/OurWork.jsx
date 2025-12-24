import React, { useState } from "react";
import { assets } from "../assets/assets";
import MainLoader from "../components/MainLoader";
import ImageViewer from "../components/ImageViewer";

const categories = [
	{
		id: "wedding",
		title: "Weeding",
		images: [
			{ key: "wedding9", src: "wedding9" },
			{ key: "wedding19", src: "wedding19" },
		],
	},
	{
		id: "pre-wedding",
		title: "Pre Wedding",
		images: [
			{ key: "PreWedding1", src: "prewedding1" },
			{ key: "PreWedding2", src: "prewedding2" },
		],
	},
	{
		id: "engagement",
		title: "Engagement",
		images: [
			{ key: "Engagement3", src: "engagement3" },
			{ key: "Engagement2", src: "engagement2" },
		],
	},
	{
		id: "haldi",
		title: "Haldi",
		images: [
			{ key: "Haldi1", src: "haldi1" },
			{ key: "Haldi2", src: "haldi2" },
		],
	},
	{
		id: "birthday",
		title: "Birthday",
		images: [
			{ key: "Birthday4", src: "birthday4" },
			{ key: "Birthday5", src: "birthday5" },
		],
	},
	{
		id: "maternity",
		title: "Maternity",
		images: [
			{ key: "Maternity1", src: "maternity1" },
			{ key: "Maternity4", src: "maternity4" },
		],
	},
];

const OurWork = () => {
	const [loadedImages, setLoadedImages] = useState({});
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currentCategoryId, setCurrentCategoryId] = useState(null);

	const handleImageLoad = (imageName) => {
		setLoadedImages(prev => ({ ...prev, [imageName]: true }));
	};

	const handleImageClick = (categoryId, index) => {
		setCurrentCategoryId(categoryId);
		setCurrentImageIndex(index);
		setIsViewerOpen(true);
	};

	const getImagesForCategory = (categoryId) => {
		const category = categories.find(cat => cat.id === categoryId);
		return category ? category.images.map(img => assets[img.src]) : [];
	};

	const handlePrev = () => {
		const images = getImagesForCategory(currentCategoryId);
		setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleNext = () => {
		const images = getImagesForCategory(currentCategoryId);
		setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
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
								style={{ fontFamily: "'Playfair Display', serif" }}
							>
								{category.title}
							</h2>

							{/* Gallery Grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
								{category.images.map((image, index) => {
									const src = assets[image.src];
									return (
										<div key={image.key} className="group cursor-pointer" onClick={() => handleImageClick(category.id, index)}>
											<div className="block">
												<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
													{!loadedImages[image.key] && <MainLoader />}
													{src ? (
														<img
															src={src}
															alt={category.title}
															className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages[image.key] ? 'opacity-100' : 'opacity-0'}`}
															loading="lazy"
															onLoad={() => handleImageLoad(image.key)}
														/>
													) : (
														<div className="w-full aspect-4/3 flex items-center justify-center text-gray-500 text-sm">Image coming soon</div>
													)}
												</figure>
												<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
													{/* Category Title */}
												</h3>
											</div>
										</div>
									);
								})}
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
				<ImageViewer
					isOpen={isViewerOpen}
					imageIndex={currentImageIndex}
					images={getImagesForCategory(currentCategoryId)}
					onClose={() => setIsViewerOpen(false)}
					onPrev={handlePrev}
					onNext={handleNext}
				/>
			</section>
		</div>
	);
};

export default OurWork;