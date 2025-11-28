"use client";

import Image from "next/image";
import { Bell, Settings } from "lucide-react";

interface HeaderProps {
	userName: string;
	phoneNumber: string;
}

export function Header({ userName, phoneNumber }: HeaderProps) {
	return (
		<div></div>
		// <header className="bg-[#a3d977] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 border-0 relative">
		// 	<div className="flex items-center gap-3 relative z-10">
		// 		<div className="relative w-10 h-10 flex-shrink-0 p-1.5 bg-[#0a1a3a] rounded-xl border border-white/40 shadow-lg">
		// 			<Image
		// 				src="/images/tele-logo2.png"
		// 				alt="Ethiotel Logo"
		// 				fill
		// 				className="object-contain p-1"
		// 			/>
		// 		</div>
		// 		<div>
		// 			<h1 className="text-lg font-bold tracking-tight">My Ethiotel</h1>
		// 			<p className="text-xs opacity-80 font-medium">Mobile Services</p>
		// 		</div>
		// 	</div>

		// 	<div className="flex items-center gap-2 relative z-10">
		// 		<button className="p-2.5 hover:bg-white/25 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm">
		// 			<Bell size={20} className="stroke-2" />
		// 		</button>
		// 		<button className="p-2.5 hover:bg-white/25 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm">
		// 			<Settings size={20} className="stroke-2" />
		// 		</button>
		// 	</div>
		// </header>
	);
}
