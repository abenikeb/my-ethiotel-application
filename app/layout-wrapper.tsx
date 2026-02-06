"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { BottomNav } from "@/components/bottom-nav";

export function LayoutWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	// Map pathname to active tab
	const getActiveTab = () => {
		if (pathname === "/") return "home";
		if (pathname.startsWith("/transfer")) return "transfer";
		if (pathname.startsWith("/packages")) return "packages";
		if (pathname.startsWith("/recharge")) return "recharge";
		if (pathname.startsWith("/family-group")) return "family-group";
		return "dashboard";
	};

	const activeTab = getActiveTab();

	return (
		<div className="relative">
			{children}
			<BottomNav activeTab={activeTab} setActiveTab={() => {}} />
		</div>
	);
}
