"use client";

import { useState } from "react";
import {
	Bell,
	Eye,
	EyeOff,
	MoreHorizontalIcon,
	Send,
	Settings,
	ShoppingBag,
	Shuffle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BalanceCardProps {
	onSeeMoreClick?: () => void;
}

export function BalanceCard({ onSeeMoreClick }: BalanceCardProps) {
	const [isBalanceVisible, setIsBalanceVisible] = useState(true);

	return (
		<div className=" bg-gradient-to-b from-[#8FD400] to-[#7EC000] rounded-b-3xl overflow-hidden h-60 mb-16">
			{/* Wavy line pattern overlay */}

			{/* Header with greeting */}
			<div className="relative z-10 px-6 pt-6 pb-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-white/30">
						<Image
							src="/images/tele-logo2.png"
							alt="Ethiotel Logo"
							fill
							className="object-contain p-1"
						/>
					</div>
					{/* <div>
						 <h1 className="text-lg font-bold tracking-tight">My Ethiotel</h1>
						<p className="text-sm font-medium opacity-90">Hello, Misganaw</p>
						
					</div> */}
					<div>
						<h1 className="text-base font-bold text-white -mb-0.5 ">
							My Ethiotel
						</h1>
						<h1 className="text-sm text-white drop-shadow-sm">Selam Abebe</h1>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<button className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 drop-shadow-sm">
						<Bell size={20} className="stroke-2 text-white" />
					</button>
					<button className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 drop-shadow-sm">
						<Settings size={20} className="stroke-2 text-white" />
					</button>
				</div>
			</div>

			{/* Balance Section */}
			<div className="relative z-10 px-6 pt-6 pb-6 space-y-4">
				{/* Balance Info */}
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<p className="text-xs font-medium text-white/90">
								Available Balance (ETB)
							</p>
							{/* <Eye size={14} className="text-white/80" /> */}
						</div>
						<button
							onClick={onSeeMoreClick}
							className="text-xs font-medium text-white/90 hover:text-white transition-colors">
							View Detail
						</button>
					</div>
					<div className="flex items-center gap-3">
						<h2 className="text-4xl font-bold text-white drop-shadow-md">
							{isBalanceVisible ? "5000.43" : "•••••••"}
						</h2>
						<button
							onClick={() => setIsBalanceVisible(!isBalanceVisible)}
							className="p-1 hover:bg-white/20 rounded-full transition-all duration-300 drop-shadow-sm"
							aria-label="Toggle balance visibility">
							{isBalanceVisible ? (
								<Eye size={20} className="text-white" />
							) : (
								<EyeOff size={20} className="text-white" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Action Buttons - Single Card Container */}
			<div className="z-10 px-6 pb-8 absolute w-[95%] left-0 right-0 mx-auto top-52">
				<div className="bg-white rounded-2xl shadow-lg p-5 flex items-center justify-around">
					<Link
						href="/packages"
						className="flex flex-col items-center gap-3 group hover:opacity-80 transition-opacity">
						<div className="rounded-xl ">
							<ShoppingBag size={22} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							Buy Package
						</span>
						{/* <span className="text-xs font-semibold text-gray-800">Send</span> */}
					</Link>

					<Link
						href="/transfer"
						className="flex flex-col items-center gap-3 group hover:opacity-80 transition-opacity">
						<div className="rounded-xl ">
							<Send size={22} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							transfer
						</span>
						{/* <span className="text-xs font-semibold text-gray-800">Send</span> */}
					</Link>

					<Link
						href="/recharge"
						className="flex flex-col items-center gap-3 group hover:opacity-80 transition-opacity">
						<div className="rounded-xl ">
							<Shuffle size={22} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							Recharge
						</span>
						{/* <span className="text-xs font-semibold text-gray-800">Send</span> */}
					</Link>

					<button
						onClick={onSeeMoreClick}
						className="flex flex-col items-center gap-3 group hover:opacity-80 transition-opacity">
						<div className="rounded-xl ">
							<MoreHorizontalIcon size={22} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							See more
						</span>
					</button>

					{/* 					

					<Link
						href="/request"
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl bg-gradient-to-b from-[#8FD400] to-[#7EC000] group-hover:from-[#9FE500] group-hover:to-[#8ED100]">
							<ShoppingBag size={20} className="text-white" />
						</div>
						<span className="text-xs font-semibold text-gray-800">Request</span>
					</Link>

					<Link
						href="/cash-in"
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl bg-gradient-to-b from-[#8FD400] to-[#7EC000] group-hover:from-[#9FE500] group-hover:to-[#8ED100]">
							<Shuffle size={20} className="text-white" />
						</div>
						<span className="text-xs font-semibold text-gray-800">
							Cash In/Out
						</span>
					</Link>

					<Link
						href="/airtime"
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl bg-gradient-to-b from-[#8FD400] to-[#7EC000] group-hover:from-[#9FE500] group-hover:to-[#8ED100]">
							<Shuffle size={20} className="text-white" />
						</div>
						<span className="text-xs font-semibold text-gray-800">Airtime</span>
					</Link> */}
				</div>
			</div>
		</div>
	);
}
