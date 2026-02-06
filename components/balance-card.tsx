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
					<div>
						<h1 className="text-base font-bold text-white drop-shadow-sm">
							Selam Abebe
						</h1>
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
							<Eye size={14} className="text-white/80" />
						</div>
						<button className="text-xs font-medium text-white/90 hover:text-white transition-colors">
							View Detail
						</button>
					</div>
					<div className="flex items-center gap-3">
						<h2 className="text-4xl font-bold text-white drop-shadow-md">
							{isBalanceVisible ? "5000.43" : "••••••"}
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
			<div className="z-10 px-6 pb-8 absolute w-11/12 left-0 right-0 mx-auto top-52">
				<div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-around">
					<Link
						href="/packages"
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl ">
							<ShoppingBag size={25} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							Buy Package
						</span>
						{/* <span className="text-xs font-semibold text-gray-800">Send</span> */}
					</Link>

					<Link
						href="/transfer"
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl ">
							<Send size={25} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							transfer
						</span>
						{/* <span className="text-xs font-semibold text-gray-800">Send</span> */}
					</Link>

					<Link
						href="/recharge"
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl ">
							<Shuffle size={25} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							Recharge
						</span>
						{/* <span className="text-xs font-semibold text-gray-800">Send</span> */}
					</Link>

					<button
						onClick={onSeeMoreClick}
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl ">
							<MoreHorizontalIcon size={25} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							See more
						</span>
					</button>

					{/* <Link
						href="/packages"
						className="flex flex-col items-center gap-2 group hover:opacity-80 transition-opacity">
						<div className="p-2.5 rounded-xl ">
							<Send size={25} className="text-lime-600" />
						</div>
						<span className="text-xs text-gray-800 font-semibold text-center leading-tight">
							Buy Package
						</span>
						
					</Link> */}

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

// "use client";

// import { useState } from "react";
// import {
// 	Bell,
// 	Eye,
// 	EyeOff,
// 	Send,
// 	Settings,
// 	ShoppingBag,
// 	Shuffle,
// 	Wallet,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// interface BalanceCardProps {
// 	onSeeMoreClick?: () => void;
// }

// export function BalanceCard({ onSeeMoreClick }: BalanceCardProps) {
// 	const [isBalanceVisible, setIsBalanceVisible] = useState(true);

// 	return (
// 		<div className="relative pt-2 pb-8 text-white space-y-6 gradient-pattern rounded-3xl overflow-hidden">
// 			{/* Header with greeting */}
// 			<header className="pl-4 pr-4 mb-10 text-white flex items-center justify-between sticky top-0 z-50 border-0 relative">
// 				<div className="flex items-center gap-3 relative z-10">
// 					<div className="relative w-12 h-12 flex-shrink-0 p-1.5 rounded-xl border border-white/40 shadow-lg">
// 						<Image
// 							src="/images/tele-logo2.png"
// 							alt="Ethiotel Logo"
// 							fill
// 							className="object-contain p-1"
// 						/>
// 					</div>
// 					<div>
// 						<h1 className="text-lg font-bold tracking-tight">My Ethiotel</h1>
// 						<p className="text-sm font-medium opacity-90">Hello, Misganaw</p>
// 					</div>
// 				</div>

// 				<div className="flex items-center gap-2 relative z-10">
// 					<button className="p-2.5 hover:bg-white/25 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm">
// 						<Bell size={20} className="stroke-2" />
// 					</button>
// 					<button className="p-2.5 hover:bg-white/25 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm">
// 						<Settings size={20} className="stroke-2" />
// 					</button>
// 				</div>
// 			</header>

// 			<div className="pl-8 pr-8 space-y-6">
// 				<div className="relative text-center space-y-3 z-10">
// 					<p className="text-sm opacity-90 font-medium tracking-wide">
// 						Current Balance
// 					</p>
// 					<div className="flex items-center justify-center gap-3">
// 						<h2 className="text-5xl font-bold tracking-tight">
// 							{isBalanceVisible ? "50.01 ETB" : "••••••"}
// 						</h2>
// 						<button
// 							onClick={() => setIsBalanceVisible(!isBalanceVisible)}
// 							className="p-2 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
// 							aria-label="Toggle balance visibility">
// 							{isBalanceVisible ? <Eye size={20} /> : <EyeOff size={20} />}
// 						</button>
// 					</div>
// 					<p className="text-xs opacity-80 font-mono tracking-wide">
// 						251913228892
// 					</p>
// 				</div>

// 				{/* Accounts Button - Modern style */}
// 				<div className="relative flex justify-center z-10">
// 					<button className="bg-white/25 hover:bg-white/40 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg">
// 						Accounts
// 					</button>
// 				</div>

// 				<div className="relative grid grid-cols-4 gap-3 pt-2 z-10">
// 					<Link
// 						href="/packages"
// 						className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 shadow-lg">
// 						<div className="p-2.5 rounded-lg bg-white/20">
// 							<ShoppingBag size={20} />
// 						</div>
// 						<span className="text-xs font-semibold text-center leading-tight">
// 							Buy
// 							<br />
// 							Package
// 						</span>
// 					</Link>
// 					<Link
// 						href="/transfer"
// 						className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 shadow-lg">
// 						<div className="p-2.5 rounded-lg bg-white/20">
// 							<Send size={20} />
// 						</div>
// 						<span className="text-xs font-semibold text-center leading-tight">
// 							Transfer
// 						</span>
// 					</Link>
// 					<Link
// 						href="/recharge"
// 						className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20 shadow-lg">
// 						<div className="p-2.5 rounded-lg bg-white/20">
// 							<Shuffle size={20} />
// 						</div>
// 						<span className="text-xs font-semibold text-center leading-tight">
// 							Recharge
// 							<br />
// 							Payment
// 						</span>
// 					</Link>
// 					<button
// 						onClick={onSeeMoreClick}
// 						className="flex flex-col items-center gap-2 p-3.5 bg-white/15 hover:bg-white/30 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer active:scale-95 border border-white/20 shadow-lg font-semibold">
// 						<div className="text-lg">⋯</div>
// 						<span className="text-xs font-semibold text-center leading-tight">
// 							See
// 							<br />
// 							More
// 						</span>
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
