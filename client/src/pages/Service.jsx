import React from "react";

const Service = () => {
	const services = [
		{
			title: "Wedding Photography",
			description: "Capture your special day with our professional wedding photography services."
		},
		{
			title: "Pre-Wedding Shoots",
			description: "Create beautiful memories before the big day with our pre-wedding packages."
		},
		{
			title: "Engagement Sessions",
			description: "Celebrate your engagement with candid and romantic photographs."
		},
		{
			title: "Videography",
			description: "Professional cinematic videos to preserve your precious moments."
		},
		{
			title: "Album Design",
			description: "Beautifully crafted albums to cherish your memories forever."
		},
		{
			title: "Post-Production",
			description: "Expert editing and retouching to perfect every shot."
		}
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Our Services</h1>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Premium photography and videography services for your special moments
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, idx) => (
							<div
								key={idx}
								className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
							>
								<h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
								<p className="text-gray-600">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gray-50">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to book your session?</h2>
					<a
						href="/contact"
						className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
					>
						Contact Us
					</a>
				</div>
			</section>
		</div>
	);
};

export default Service;
