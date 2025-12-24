import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const reviewsData = [
	{
		id: 1,
		name: "Priya & Rahul",
		designation: "Wedding Couple",
		review: "The Story Creators captured every precious moment of our wedding perfectly! Their attention to detail and creativity exceeded our expectations.",
		image: "https://randomuser.me/api/portraits/women/1.jpg"
	},
	{
		id: 2,
		name: "Anjali & Vikram",
		designation: "Pre-Wedding Shoot",
		review: "Amazing experience! The team made us feel so comfortable during our pre-wedding shoot. The photos turned out absolutely stunning.",
		image: "https://randomuser.me/api/portraits/women/2.jpg"
	},
	{
		id: 3,
		name: "Neha & Arjun",
		designation: "Engagement Couple",
		review: "Professional, creative, and punctual! They understood our vision and delivered beyond what we imagined. The engagement photos are our forever treasures.",
		image: "https://randomuser.me/api/portraits/women/3.jpg"
	},
	{
		id: 4,
		name: "Riya & Karan",
		designation: "Haldi Ceremony",
		review: "The team captured the vibrant colors and emotions of our haldi ceremony beautifully. Every candid moment was perfectly captured.",
		image: "https://randomuser.me/api/portraits/women/4.jpg"
	},
	{
		id: 5,
		name: "Shreya & Aditya",
		designation: "Wedding Film",
		review: "Our wedding film is a masterpiece! The Story Creators team has incredible talent. They turned our special day into a cinematic experience.",
		image: "https://randomuser.me/api/portraits/women/5.jpg"
	},
	{
		id: 6,
		name: "Meera & Rohan",
		designation: "Reception Event",
		review: "Outstanding service from start to finish! The team was professional and creative. We couldn't be happier with our wedding photos.",
		image: "https://randomuser.me/api/portraits/women/6.jpg"
	}
];

const Review = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	// Responsive cards per view based on screen width
	const [cardsPerView, setCardsPerView] = useState(3);
	const maxIndex = Math.max(0, reviewsData.length - cardsPerView);

	useEffect(() => {
		if (isHovered) return;

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
		}, 4000);

		return () => clearInterval(interval);
	}, [isHovered, maxIndex]);

	// Set cards per view responsively and on resize
	useEffect(() => {
		const updateCardsPerView = () => {
			const w = window.innerWidth;
			if (w < 640) {
				setCardsPerView(1);
			} else if (w < 1024) {
				setCardsPerView(2);
			} else {
				setCardsPerView(3);
			}
		};
		updateCardsPerView();
		window.addEventListener("resize", updateCardsPerView);
		return () => window.removeEventListener("resize", updateCardsPerView);
	}, []);

	// Clamp current index when cardsPerView changes
	useEffect(() => {
		setCurrentIndex((idx) => Math.min(idx, maxIndex));
	}, [cardsPerView, maxIndex]);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	};

	const visibleReviews = reviewsData.slice(currentIndex, currentIndex + cardsPerView);

	return (
		<section className={"relative w-full bg-white py-16 md:py-24"}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
				{/* Heading */}
				<div className="mb-12 text-center">
					<h2 
						className="text-3xl md:text-5xl font-light tracking-tight text-black mb-4"
						style={{ fontFamily: "'Playfair Display', serif" }}
					>
						What Our Clients Say
					</h2>
					<p className="text-gray-600 text-sm md:text-base font-light">
						Stories from hearts we've captured
					</p>
				</div>

				{/* Carousel Container */}
				<div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					{/* Left Arrow */}
					<button
						onClick={handlePrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 z-10 bg-white border border-blue-200 hover:bg-blue-50 text-blue-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
						aria-label="Previous reviews"
					>
						<ChevronLeft size={24} className="sm:hidden" />
						<ChevronLeft size={28} className="hidden sm:block" />
					</button>

					{/* Cards Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
						{visibleReviews.map((review) => (
							<div
								key={review.id}
								className="bg-white rounded-lg shadow-xl p-6 sm:p-8 min-h-60 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
							>
								{/* Name */}
								<h3 className="text-xl sm:text-xl font-light text-black mb-2 uppercase tracking-wide">
									{review.name}
								</h3>

								{/* Designation */}
								<p className="text-sm text-gray-500 mb-4 font-light">
									{review.designation}
								</p>

								{/* Review Text */}
								<p
									className="text-gray-700 text-sm leading-relaxed mb-6 grow"
									style={{
										display: "-webkit-box",
										WebkitBoxOrient: "vertical",
										overflow: "hidden",
									}}
								>
									{review.review}
								</p>


							</div>
						))}
					</div>

					{/* Right Arrow */}
					<button
						onClick={handleNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 z-10 bg-white border border-blue-200 hover:bg-blue-50 text-blue-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
						aria-label="Next reviews"
					>
						<ChevronRight size={24} className="sm:hidden" />
						<ChevronRight size={28} className="hidden sm:block" />
					</button>

				
				</div>
			</div>
		</section>
	);
};

export default Review;
