import React, { useEffect, useMemo, useRef, useState } from "react";
import { filmItems, photoItems } from "../../assets/assets";
import ImageViewer from "../ImageViewer";
const Filters = ({ active, onChange, options }) => (
	<div className="w-full flex items-center justify-center gap-3 flex-wrap">
		{options.map((opt) => (
			<button
				key={opt.value}
				onClick={() => onChange(opt.value)}
				className={`px-4 py-1.5 rounded-full text-sm border transition ${active === opt.value
					? "bg-black text-white border-black"
					: "bg-white text-black border-gray-300 hover:bg-gray-100"
					}`}
			>
				{opt.label}
			</button>
		))}
	</div>
);

const animationVariants = ["fade-in", "fade-right", "zoom-in", "fade-left", "fade-down"];

const PhotoGrid = ({ items, animationKey, onImageClick }) => (
	<div className="columns-2 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
		{items.map((it, idx) => (
			<div
				key={`${animationKey}-${idx}-${it.url}`}
				className={`mb-5 break-inside-avoid overflow-hidden rounded-2xl cursor-pointer  shadow-[0_22px_55px_-28px_rgba(0,0,0,0.45)] ${animationVariants[idx % animationVariants.length]}`}
				style={{ animationDelay: `${(idx % animationVariants.length) * 80}ms` }}
				onClick={() => onImageClick(idx)}
			>
				<img
					src={it.url}
					alt={it.category || `gallery-${idx}`}
					className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105 hover:-translate-y-1"
					loading="lazy"
				/>
			</div>
		))}
	</div>
);

const FilmGrid = ({ items, animationKey }) => (
	<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{items.map((it, idx) => (
			<a
				key={`${animationKey}-${idx}-${it.thumb}`}
				href={it.video}
				target="_blank"
				rel="noreferrer"
				className={`block group overflow-hidden rounded-2xl border border-gray-200 bg-white relative shadow-[0_22px_55px_-28px_rgba(0,0,0,0.45)] ${animationVariants[idx % animationVariants.length]}`}
				style={{ animationDelay: `${(idx % animationVariants.length) * 80}ms` }}
			>
				<div className="aspect-video w-full overflow-hidden">
					<img
						src={it.thumb}
						alt={it.category}
						className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
						loading="lazy"
					/>
				</div>
				{/* Play overlay */}
				<div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition">
					<div className="h-12 w-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M8 5v14l11-7z" />
						</svg>
					</div>
				</div>
			</a>
		))}
	</div>
);

const Gallery = () => {
	const [photoFilter, setPhotoFilter] = useState("all");
	const [filmFilter, setFilmFilter] = useState("all");
	const [hasEntered, setHasEntered] = useState(false);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const sectionRef = useRef(null);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node || hasEntered) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setHasEntered(true);
						observer.disconnect();
					}
				});
			},
			{ rootMargin: "0px 0px -120px 0px", threshold: 0.15 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [hasEntered]);

	const photoOptions = useMemo(
		() => [
			{ value: "all", label: "All" },
			{ value: "engagement", label: "ENGAGEMENT" },
			{ value: "pre-wedding", label: "PRE WEDDING" },
			{ value: "wedding", label: "WEDDING" },
			{ value: "haldi", label: "HALDI" },
			{ value: "birthday", label: "BIRTHDAY" },
			{ value: "maternity", label: "MATERNITY" },
		],
		[]
	);

	const filmOptions = useMemo(
		() => [
			{ value: "all", label: "All" },
			{ value: "wedding", label: "WEDDING" },
			{ value: "pre-wedding", label: "PRE WEDDING" },
		],
		[]
	);

	const filteredPhotos = useMemo(
		() => (photoFilter === "all" ? photoItems : photoItems.filter((i) => i.category === photoFilter)),
		[photoFilter]
	);

	const filteredFilms = useMemo(
		() => (filmFilter === "all" ? filmItems : filmItems.filter((i) => i.category === filmFilter)),
		[filmFilter]
	);

	const imageUrls = useMemo(() => filteredPhotos.map(item => item.url), [filteredPhotos]);

	const handleImageClick = (index) => {
		setCurrentImageIndex(index);
		setIsViewerOpen(true);
	};

	const handlePrev = () => {
		setCurrentImageIndex(prev => (prev === 0 ? imageUrls.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentImageIndex(prev => (prev === imageUrls.length - 1 ? 0 : prev + 1));
	};

	return (
		<section
			ref={sectionRef}
			className="relative w-full bg-white"
			data-id="3f8a7312"
			data-element_type="section"
		>
			<div className="  px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24">
				<div className="mb-6 md:mb-10">
					<h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-center"
						style={{ fontFamily: "'Playfair Display', serif" }}
					>Gallery</h1>
				</div>

				<div className="mb-6 font-extralight">
					<Filters active={photoFilter} onChange={setPhotoFilter} options={photoOptions} />
				</div>

				{hasEntered ? (
				<PhotoGrid items={filteredPhotos} animationKey={photoFilter} onImageClick={handleImageClick} />
			) : (
				<div className="grid place-items-center py-10 text-gray-500 text-sm">
					<p>Scroll to load gallery…</p>
				</div>
			)}

				<div className="mt-8 flex justify-center">
					<a
						href="/our-work"
						className="px-5 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition font-extralight"
					>
						See All
					</a>
				</div>

				<div className="mt-14 mb-4">
					<h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-center"
						style={{ fontFamily: "'Playfair Display', serif" }}
					>Films</h2>
				</div>

				<div className="mb-6 font-extralight">
					<Filters active={filmFilter} onChange={setFilmFilter} options={filmOptions} />
				</div>

				{hasEntered ? (
					<FilmGrid items={filteredFilms} animationKey={filmFilter} />
				) : (
					<div className="grid place-items-center py-8 text-gray-500 text-sm">
						<p>Scroll to load films…</p>
					</div>
				)}

				<div className="mt-8 flex justify-center">
					<a
						href="/films"
						className="px-5 py-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition font-extralight"
					>
						See All
					</a>
				</div>

				<ImageViewer
					isOpen={isViewerOpen}
					imageIndex={currentImageIndex}
					images={imageUrls}
					onClose={() => setIsViewerOpen(false)}
					onPrev={handlePrev}
					onNext={handleNext}
				/>
			</div>
		</section>
	);
};

export default Gallery;

