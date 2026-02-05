"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, MoreVertical, X } from "lucide-react";
import { CreateFamilyGroupForm } from "@/components/create-family-group-form";
import { FamilyGroupEmptyState } from "@/components/family-group-empty-state";

export default function FamilyGroupPage() {
	const [showForm, setShowForm] = useState(false);
	const [hasFamily, setHasFamily] = useState(false);

	const handleCreateFamily = () => {
		setShowForm(true);
	};

	const handleConfirm = () => {
		setShowForm(false);
		setHasFamily(true);
	};

	return (
		<div className="min-h-screen bg-background pb-24">
			{showForm ? (
				<CreateFamilyGroupForm
					onBack={() => setShowForm(false)}
					onConfirm={handleConfirm}
				/>
			) : (
				<FamilyGroupEmptyState onCreateClick={handleCreateFamily} />
			)}
		</div>
	);
}
