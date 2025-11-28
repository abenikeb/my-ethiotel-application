"use client";

import { useState } from "react";
import { Eye, EyeOff, Send, ShoppingBag, Shuffle, Wallet } from "lucide-react";

interface BalanceCardProps {
	onSeeMoreClick?: () => void;
}

export function BalanceCard({ onSeeMoreClick }: BalanceCardProps) {
	const [isBalanceVisible, setIsBalanceVisible] = useState(true);

	return (
		<div className="relative p-8 text-white space-y-6 gradient-pattern rounded-3xl overflow-hidden">
			{/* Header with greeting */}
			<div className="relative flex items-start justify-between z-10">
				<div>
					<p className="text-sm font-medium opacity-90">Hello, Misganaw</p>
					<p className="text-xs opacity-75 mt-0.5">Welcome Back to Ethiotel</p>
				</div>
				<div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
					<Wallet size={28} className="opacity-100" />
				</div>
			</div>

			<div className="relative text-center space-y-3 z-10">
				<p className="text-sm opacity-90 font-medium tracking-wide">
					Current Balance
				</p>
				<div className="flex items-center justify-center gap-3">
					<h2 className="text-6xl font-bold tracking-tight">
						{isBalanceVisible ? "0.01 ETB" : "••••••"}
					</h2>
					<button
						onClick={() => setIsBalanceVisible(!isBalanceVisible)}
						className="p-2 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
						aria-label="Toggle balance visibility">
						{isBalanceVisible ? <Eye size={20} /> : <EyeOff size={20} />}
					</button>
				</div>
				<p className="text-xs opacity-80 font-mono tracking-wide">913228892</p>
			</div>

			{/* Accounts Button - Modern style */}
			<div className="relative flex justify-center z-10">
				<button className="bg-white/25 hover:bg-white/40 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg">
					Accounts
				</button>
			</div>

			<div className="relative grid grid-cols-4 gap-3 pt-2 z-10">
				<div className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 shadow-lg">
					<div className="p-2.5 rounded-lg bg-white/20">
						<ShoppingBag size={20} />
					</div>
					<span className="text-xs font-semibold text-center leading-tight">
						Buy
						<br />
						Package
					</span>
				</div>
				<div className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 shadow-lg">
					<div className="p-2.5 rounded-lg bg-white/20">
						<Send size={20} />
					</div>
					<span className="text-xs font-semibold text-center leading-tight">
						Transfer
					</span>
				</div>
				<div className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 shadow-lg">
					<div className="p-2.5 rounded-lg bg-white/20">
						<Shuffle size={20} />
					</div>
					<span className="text-xs font-semibold text-center leading-tight">
						Share/
						<br />
						Convert
					</span>
				</div>
				<button
					onClick={onSeeMoreClick}
					className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer active:scale-95 border border-white/20 shadow-lg font-semibold">
					<div className="text-lg">⋯</div>
					<span className="text-xs font-semibold text-center leading-tight">
						See
						<br />
						More
					</span>
				</button>
			</div>
		</div>
	);
}
