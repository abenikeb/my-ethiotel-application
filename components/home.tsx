"use client";

import { useRef } from "react";
import { Header } from "@/components/header";
import { BalanceCard } from "@/components/balance-card";
import { UsageStats } from "@/components/usage-stats";
import { QuickActions } from "@/components/quick-actions";
import { PromotionBanner } from "@/components/promotion-banner";
import { RecentTransactions } from "@/components/recent-transactions";

export default function Home() {
	const quickActionsRef = useRef<HTMLDivElement>(null);

	const handleSeeMore = () => {
		quickActionsRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className="min-h-screen bg-background">
			<main className="pb-24">
				{/* Hero Section with Balance - extends full gradient */}
				<section className="">
					<div className="px-0">
						<div className="relative max-w-md mx-auto">
							<BalanceCard onSeeMoreClick={handleSeeMore} />

							<svg
								className="absolute top-0 left-0 w-full h-48 pointer-events-none overflow-visible"
								viewBox="0 0 400 300"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg">
								{/* Left side - 20 curves forming fan shape */}
								<path
									d="M -80 10 Q 30 5 200 90"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.32"
								/>
								<path
									d="M -75 18 Q 35 12 205 98"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.31"
								/>
								<path
									d="M -70 26 Q 40 19 210 106"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.30"
								/>
								<path
									d="M -65 34 Q 45 26 215 114"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.29"
								/>
								<path
									d="M -60 42 Q 50 33 220 122"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.28"
								/>
								<path
									d="M -55 50 Q 55 40 225 130"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.27"
								/>
								<path
									d="M -50 58 Q 60 47 230 138"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.26"
								/>
								<path
									d="M -45 66 Q 65 54 235 146"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.25"
								/>
								<path
									d="M -40 74 Q 70 61 240 154"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.24"
								/>
								<path
									d="M -35 82 Q 75 68 245 162"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.23"
								/>
								<path
									d="M -30 90 Q 80 75 250 170"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.22"
								/>
								<path
									d="M -25 98 Q 85 82 255 178"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.21"
								/>
								<path
									d="M -20 106 Q 90 89 260 186"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.20"
								/>
								<path
									d="M -15 114 Q 95 96 265 194"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.19"
								/>
								<path
									d="M -10 122 Q 100 103 270 202"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.18"
								/>
								<path
									d="M -5 130 Q 105 110 275 210"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.17"
								/>
								<path
									d="M 0 138 Q 110 117 280 218"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.16"
								/>
								<path
									d="M 5 146 Q 115 124 285 226"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.15"
								/>
								<path
									d="M 10 154 Q 120 131 290 234"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.14"
								/>
								<path
									d="M 15 162 Q 125 138 295 242"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.13"
								/>

								{/* Right side - 20 curves forming fan shape (mirror) */}
								<path
									d="M 480 10 Q 370 5 200 90"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.32"
								/>
								<path
									d="M 475 18 Q 365 12 195 98"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.31"
								/>
								<path
									d="M 470 26 Q 360 19 190 106"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.30"
								/>
								<path
									d="M 465 34 Q 355 26 185 114"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.29"
								/>
								<path
									d="M 460 42 Q 350 33 180 122"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.28"
								/>
								<path
									d="M 455 50 Q 345 40 175 130"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.27"
								/>
								<path
									d="M 450 58 Q 340 47 170 138"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.26"
								/>
								<path
									d="M 445 66 Q 335 54 165 146"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.25"
								/>
								<path
									d="M 440 74 Q 330 61 160 154"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.24"
								/>
								<path
									d="M 435 82 Q 325 68 155 162"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.23"
								/>
								<path
									d="M 430 90 Q 320 75 150 170"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.22"
								/>
								<path
									d="M 425 98 Q 315 82 145 178"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.21"
								/>
								<path
									d="M 420 106 Q 310 89 140 186"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.20"
								/>
								<path
									d="M 415 114 Q 305 96 135 194"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.19"
								/>
								<path
									d="M 410 122 Q 300 103 130 202"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.18"
								/>
								<path
									d="M 405 130 Q 295 110 125 210"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.17"
								/>
								<path
									d="M 400 138 Q 290 117 120 218"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.16"
								/>
								<path
									d="M 395 146 Q 285 124 115 226"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.15"
								/>
								<path
									d="M 390 154 Q 280 131 110 234"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.14"
								/>
								<path
									d="M 385 162 Q 275 138 105 242"
									stroke="white"
									strokeWidth="0.9"
									fill="none"
									opacity="0.13"
								/>
							</svg>
						</div>
					</div>
				</section>

				{/* Usage Statistics */}
				<section className="px-4 py-6">
					<div className="max-w-md mx-auto">
						<UsageStats />
					</div>
				</section>

				{/* Promotion Banner */}
				<section className="px-4 py-3">
					<div className="max-w-md mx-auto">
						<PromotionBanner />
					</div>
				</section>

				{/* Quick Actions */}
				<section className="px-4 py-6" ref={quickActionsRef}>
					<div className="max-w-md mx-auto">
						<QuickActions />
					</div>
				</section>

				{/* Recent Transactions */}
				<section className="px-4 py-6">
					<div className="max-w-md mx-auto">
						<RecentTransactions />
					</div>
				</section>
			</main>
		</div>
	);
}
