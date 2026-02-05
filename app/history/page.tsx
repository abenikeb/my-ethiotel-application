"use client";

import { TransactionHistory } from "@/components/transaction-history";

export default function HistoryPage() {
	return (
		<div className="min-h-screen bg-background pb-24">
			<TransactionHistory />
		</div>
	);
}
