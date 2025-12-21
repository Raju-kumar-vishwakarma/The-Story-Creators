import React, { useState } from "react";

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
			<section className="py-10 md:py-24 min-h-screen bg-white space-y-10 md:mt-10 mt-15">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					{/* Wedding Section */}
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">WEDDING</h2>

						{/* Wedding Gallery Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
							{/* Karan & Khushali */}
							<div className="group">
								<a className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['karan-khushali'] && <ImageLoader />}
										<img
											src="https://mediaworkersfilms.com/wp-content/uploads/2024/02/Karan-Khusali1-1024x681.jpg"
											alt="Karan & Khushali Wedding"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['karan-khushali'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('karan-khushali')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										Karan &amp; Khushali
									</h3>
								</a>
							</div>

							{/* Neha & Vibhor */}
							<div className="group">
								<a className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['neha-vibhor'] && <ImageLoader />}
										<img
											src="https://mediaworkersfilms.com/wp-content/uploads/2024/02/Couple-Potrait-1024x681.jpg"
											alt="Neha & Vibhor Wedding"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['neha-vibhor'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('neha-vibhor')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										Neha &amp; Vibhor
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
						<h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">PRE WEDDING</h2>

						{/* Pre Wedding Gallery Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
							{/* Keshav & Priyeta */}
							<div className="group">
								<a  className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['keshav-priyeta'] && <ImageLoader />}
										<img
											src="https://mediaworkersfilms.com/wp-content/uploads/2024/02/RPR_8906-1024x681.jpg"
											alt="Keshav & Priyeta Pre Wedding"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['keshav-priyeta'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('keshav-priyeta')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										Keshav &amp; Priyeta
									</h3>
								</a>
							</div>

							{/* Abhijeet & Shreya */}
							<div className="group">
								<a className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['abhijeet-shreya'] && <ImageLoader />}
										<img
											src="https://mediaworkersfilms.com/wp-content/uploads/2024/02/RPR_4386-1024x681.jpg"
											alt="Abhijeet & Shreya Pre Wedding"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['abhijeet-shreya'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('abhijeet-shreya')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										Abhijeet &amp; Shreya
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
						<h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">ENGAGEMENT</h2>

						{/* Engagement Gallery Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
							{/* Priyank & Yamini */}
							<div className="group">
								<a  className="block">
									<figure className="relative overflow-hidden rounded-lg mb-4 hover:scale-105 transition-transform duration-300 bg-gray-100">
										{!loadedImages['priyank-yamini'] && <ImageLoader />}
										<img
											src="https://mediaworkersfilms.com/wp-content/uploads/2024/02/Priyank-Yamini-1024x681.jpg"
											alt="Priyank & Yamini Engagement"
											className={`w-full h-auto object-cover transition-opacity duration-500 ${loadedImages['priyank-yamini'] ? 'opacity-100' : 'opacity-0'}`}
											loading="lazy"
											onLoad={() => handleImageLoad('priyank-yamini')}
										/>
									</figure>
									<h3 className="text-xl md:text-2xl font-semibold text-black text-center group-hover:text-gray-700 transition-colors">
										Priyank &amp; Yamini
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
