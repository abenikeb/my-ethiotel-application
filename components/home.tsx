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
								className="absolute top-0 left-0 w-full h-40 pointer-events-none"
								viewBox="0 0 400 250"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg">
								<defs>
									<pattern
										id="sphericalCurves"
										x="0"
										y="0"
										width="100"
										height="250"
										patternUnits="userSpaceOnUse">
										{/* Concentric spherical curves */}
										<path
											d="M0,20 Q25,15 50,20 T100,20"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.3"
										/>
										<path
											d="M0,40 Q25,35 50,40 T100,40"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.25"
										/>
										<path
											d="M0,60 Q25,55 50,60 T100,60"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.2"
										/>
										<path
											d="M0,80 Q25,75 50,80 T100,80"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.18"
										/>
										<path
											d="M0,100 Q25,95 50,100 T100,100"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.15"
										/>
										<path
											d="M0,120 Q25,115 50,120 T100,120"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.12"
										/>
										<path
											d="M0,140 Q25,135 50,140 T100,140"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.1"
										/>
										<path
											d="M0,160 Q25,155 50,160 T100,160"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.08"
										/>
										<path
											d="M0,180 Q25,175 50,180 T100,180"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.06"
										/>
										<path
											d="M0,200 Q25,195 50,200 T100,200"
											stroke="white"
											strokeWidth="0.8"
											fill="none"
											opacity="0.05"
										/>
									</pattern>
								</defs>
								<rect width="400" height="250" fill="url(#sphericalCurves)" />
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
