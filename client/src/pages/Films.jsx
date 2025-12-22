import React, { useState } from "react";
import { Play } from "lucide-react";
import { filmItems } from "../assets/assets";


const categories = [
	{ key: "all", label: "All" },
	{ key: "wedding", label: "WEDDING" },
	{ key: "pre-wedding", label: "PRE WEDDING" },
];

const Films = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const visibleItems =
		activeCategory === "all"
			? filmItems
			: filmItems.filter((item) => item.category === activeCategory);

	return (
		<section className="w-full mb-15 pt-10 md:pt-16 min-h-screen bg-white space-y-10 mt-20 px-4 sm:px-6 lg:px-12">
			<div className="mx-auto max-w-6xl">
				{/* Heading */}
				<div className="mb-8 md:mb-12 text-center">
					<h1
						className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
						style={{ fontFamily: "'Great Vibes', cursive" }}
					>
						Our Creativity
					</h1>
				</div>

				{/* Filters */}
				<div className="eael-filter-gallery-control mb-8">
					<ul className="flex flex-wrap justify-center gap-3 md:gap-6">
						{categories.map((c) => (
							<li
								key={c.key}
								className={
									`control cursor-pointer rounded-full px-6 py-2.5 text-sm md:text-base transition-all duration-300 ` +
									(activeCategory === c.key
										? "bg-black text-white"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200")
								}
								onClick={() => setActiveCategory(c.key)}
							>
								{c.label}
							</li>
						))}
					</ul>
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{visibleItems.map((item) => (
						<div
							key={item.id}
							className="relative group overflow-hidden rounded-lg shadow-sm eael-filterable-gallery-item-wrap"
						>
							<img
								src={item.thumb}
								alt={item.alt}
								className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>

							{/* Hover overlay with play button */}
							<a
								href={item.video}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Open video"
								className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
							>
								<span className="bg-white/90 text-black rounded-full p-3 shadow-lg flex items-center justify-center">
									<Play size={26} />
								</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Films;
