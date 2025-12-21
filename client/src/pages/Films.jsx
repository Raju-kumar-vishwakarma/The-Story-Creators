import React from "react";

const Films = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Films</h1>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Cinematic storytelling for your special moments
						</p>
					</div>
				</div>
			</section>

			{/* Films Section */}
			<section className="py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="text-center text-gray-600">
						<p>Films collection coming soon...</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Films;
