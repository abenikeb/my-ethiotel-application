"use client";

import Image from "next/image";

interface FamilyGroupEmptyStateProps {
	onCreateClick: () => void;
}

export function FamilyGroupEmptyState({
	onCreateClick,
}: FamilyGroupEmptyStateProps) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
			{/* Illustration - placeholder using gradient and shapes */}
			<div className="mb-8 w-full max-w-xs aspect-square relative flex items-center justify-center">
				<svg
					viewBox="0 0 300 300"
					className="w-full h-full"
					xmlns="http://www.w3.org/2000/svg">
					{/* Background decorative elements */}
					<circle cx="80" cy="60" r="4" fill="#A3E635" opacity="0.6" />
					<circle cx="220" cy="80" r="3" fill="#60A5FA" opacity="0.6" />
					<circle cx="150" cy="40" r="3" fill="#A78BFA" opacity="0.6" />
					<circle cx="100" cy="200" r="3" fill="#A3E635" opacity="0.6" />
					<circle cx="240" cy="150" r="4" fill="#60A5FA" opacity="0.6" />

					{/* Person on left with calculator */}
					<g transform="translate(40, 80)">
						{/* Head */}
						<circle cx="30" cy="20" r="15" fill="#1E3A8A" />
						{/* Tie */}
						<path d="M 25 35 L 35 35 L 32 50 L 28 50 Z" fill="#DC2626" />
						{/* Body */}
						<rect x="10" y="35" width="40" height="50" fill="#1E3A8A" />
						{/* Jacket lapels */}
						<path
							d="M 20 35 L 25 60 M 40 35 L 35 60"
							stroke="#1E3A8A"
							strokeWidth="3"
							fill="none"
						/>
						{/* Arms */}
						<rect x="0" y="40" width="8" height="40" fill="#D1D5DB" />
						<rect x="52" y="40" width="8" height="40" fill="#D1D5DB" />
					</g>

					{/* Calculator in center */}
					<g transform="translate(110, 60)">
						<rect x="0" y="0" width="50" height="65" rx="4" fill="#3B82F6" />
						<rect x="5" y="5" width="40" height="25" fill="#DBEAFE" />
						<g fill="#3B82F6">
							<rect x="8" y="35" width="8" height="8" />
							<rect x="19" y="35" width="8" height="8" />
							<rect x="30" y="35" width="8" height="8" />
							<rect x="41" y="35" width="8" height="8" />
							<rect x="8" y="46" width="8" height="8" />
							<rect x="19" y="46" width="8" height="8" />
							<rect x="30" y="46" width="8" height="8" />
							<rect x="41" y="46" width="8" height="8" />
						</g>
					</g>

					{/* Credit card on right */}
					<g transform="translate(160, 90)">
						<rect x="0" y="0" width="60" height="40" rx="4" fill="#22C55E" />
						<rect
							x="5"
							y="28"
							width="30"
							height="6"
							fill="#16A34A"
							opacity="0.5"
						/>
						<circle cx="50" cy="10" r="5" fill="#FCD34D" opacity="0.7" />
					</g>

					{/* Person on right */}
					<g transform="translate(190, 80)">
						{/* Head */}
						<circle cx="20" cy="20" r="15" fill="#3730A3" />
						{/* Body */}
						<rect x="0" y="35" width="40" height="50" fill="#3730A3" />
						{/* Arms */}
						<rect x="-10" y="40" width="8" height="40" fill="#D1D5DB" />
						<rect x="42" y="40" width="8" height="40" fill="#D1D5DB" />
					</g>
				</svg>
			</div>

			{/* Text content */}
			<h2 className="text-2xl font-semibold text-foreground mb-3 text-center">
				Family Group
			</h2>
			<p className="text-center text-muted-foreground mb-12 max-w-sm">
				You don't have family group currently, please create one.
			</p>

			{/* Create button */}
			<button
				onClick={onCreateClick}
				className="w-full max-w-sm bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
				Create Family Group
			</button>
		</div>
	);
}
