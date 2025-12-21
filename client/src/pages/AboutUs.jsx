import React from "react";

const AboutUs = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className=" from-gray-50 to-white py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-black mb-4">About Us</h1>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Passionate storytellers preserving your most precious moments
						</p>
					</div>
				</div>
			</section>

			{/* About Content */}
			<section className="py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Story</h2>
							<p className="text-gray-600 text-lg mb-4">
								Media Workers was founded with a simple mission: to capture the essence of love and joy through photography and videography.
							</p>
							<p className="text-gray-600 text-lg mb-4">
								With years of experience and a passion for storytelling, we've been honored to document hundreds of beautiful moments for our clients.
							</p>
							<p className="text-gray-600 text-lg">
								Every frame tells a story, and we're committed to telling yours beautifully.
							</p>
						</div>
						<div className="bg-gray-200 aspect-square rounded-xl"></div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-16 md:py-24 bg-gray-50">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">Our Values</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="text-4xl font-bold text-black mb-4">✓</div>
							<h3 className="text-xl font-semibold text-black mb-3">Excellence</h3>
							<p className="text-gray-600">We strive for perfection in every shot and every interaction with our clients.</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-black mb-4">✓</div>
							<h3 className="text-xl font-semibold text-black mb-3">Creativity</h3>
							<p className="text-gray-600">Our team brings innovative ideas and artistic vision to every project.</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-black mb-4">✓</div>
							<h3 className="text-xl font-semibold text-black mb-3">Integrity</h3>
							<p className="text-gray-600">We believe in honest communication and delivering on our promises.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Let's Create Magic Together</h2>
					<a
						href="/contact"
						className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
					>
						Get in Touch
					</a>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
