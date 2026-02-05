"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Promotion {
	id: number;
	title: string;
	image: string;
	description: string;
}

const promotions: Promotion[] = [
	{
		id: 1,
		title: "TelePlay Prizes",
		image: "/banners/banner-prizes.jpg",
		description: "Win above 60 million ETB in prizes!",
	},
	{
		id: 2,
		title: "Football on SuperSport",
		image: "/banners/banner-sports.jpg",
		description: "Get up to 35% off on sports packages",
	},
	{
		id: 3,
		title: "Unlimited Data Plans",
		image: "/banners/banner-data.jpg",
		description: "Save 20% on monthly data packages",
	},
];

export function PromotionBanner() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const checkScroll = () => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		}
	};

	useEffect(() => {
		checkScroll();
		const container = scrollContainerRef.current;
		container?.addEventListener("scroll", checkScroll);
		window.addEventListener("resize", checkScroll);

		return () => {
			container?.removeEventListener("scroll", checkScroll);
			window.removeEventListener("resize", checkScroll);
		};
	}, []);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = 320; // Width of card + gap
			scrollContainerRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const handleBannerClick = (promotion: Promotion) => {
		console.log("Banner clicked:", promotion.title);
		// Add navigation or action here
	};

	return (
		<div className="relative w-full">
			{/* Scroll Container */}
			<div className="relative">
				<div
					ref={scrollContainerRef}
					className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
					}}>
					{promotions.map((promotion, index) => (
						<div
							key={promotion.id}
							className="flex-shrink-0 w-[350px] snap-start">
							<button
								onClick={() => handleBannerClick(promotion)}
								className="relative w-full h-36 rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-transform duration-300 hover:scale-105">
								{/* Banner Image */}
								<Image
									src={promotion.image || "/placeholder.svg"}
									alt={promotion.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
									sizes="(max-width: 640px) 100vw, 350px"
									priority={index === 0}
								/>

								{/* Overlay Gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

								{/* Content */}
								{/* <div className="absolute inset-0 flex flex-col justify-end p-4">
									<h3 className="text-white font-bold text-lg leading-tight">
										{promotion.title}
									</h3>
									<p className="text-white/90 text-sm mt-1">
										{promotion.description}
									</p>
								</div> */}
							</button>
						</div>
					))}
				</div>

				{/* Hide scrollbar styles */}
				<style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

				{/* Left Arrow */}
				{canScrollLeft && (
					<button
						onClick={() => scroll("left")}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 -ml-4"
						aria-label="Scroll left">
						<ChevronLeft size={20} className="text-gray-800" />
					</button>
				)}

				{/* Right Arrow */}
				{canScrollRight && (
					<button
						onClick={() => scroll("right")}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 -mr-4"
						aria-label="Scroll right">
						<ChevronRight size={20} className="text-gray-800" />
					</button>
				)}
			</div>

			{/* Scroll Indicator Dots */}
			<div className="flex justify-center gap-2 mt-4">
				{promotions.map((_, index) => (
					<div
						key={index}
						className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-all duration-300"
						aria-label={`Promotion ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
