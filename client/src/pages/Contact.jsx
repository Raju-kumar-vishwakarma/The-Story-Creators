import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: ""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", phone: "", message: "" });
		alert("Thank you! We'll get back to you soon.");
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Contact Us</h1>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Get in touch with us for your photography needs
						</p>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-16 md:py-24">
				<div className="mx-auto max-w-2xl px-4 sm:px-6 md:px-10 lg:px-16">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-black mb-2">Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
								placeholder="Your name"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-black mb-2">Email</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
								placeholder="your@email.com"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-black mb-2">Phone</label>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
								placeholder="+1 (555) 000-0000"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-black mb-2">Message</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows="6"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
								placeholder="Tell us about your event..."
							/>
						</div>

						<button
							type="submit"
							className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
						>
							Send Message
						</button>
					</form>
				</div>
			</section>

			{/* Info Section */}
			<section className="py-16 md:py-24 bg-gray-50">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<h3 className="text-lg font-semibold text-black mb-2">Email</h3>
							<p className="text-gray-600">info@mediaworkers.com</p>
						</div>
						<div className="text-center">
							<h3 className="text-lg font-semibold text-black mb-2">Phone</h3>
							<p className="text-gray-600">+1 (555) 000-0000</p>
						</div>
						<div className="text-center">
							<h3 className="text-lg font-semibold text-black mb-2">Address</h3>
							<p className="text-gray-600">Your City, Country</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
