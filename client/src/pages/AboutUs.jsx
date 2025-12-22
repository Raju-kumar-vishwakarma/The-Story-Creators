import React from "react";

const AboutUs = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="w-full px-4 sm:px-6 lg:px-12 py-10 min-h-screen bg-white mt-20">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-black mb-4"
						    style={{ fontFamily: "'Great Vibes', cursive" }}
						>About Us</h1>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-extralight">
							Passionate storytellers preserving your most precious moments
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
