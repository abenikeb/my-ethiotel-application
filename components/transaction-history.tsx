// "use client"

// import { useState } from "react"
// import { ChevronLeft, Search, Download, ArrowDown, TrendingUp, Send, Share2, Shuffle } from "lucide-react"

// interface TransactionHistoryProps {
//   onBack: () => void
// }

// interface Transaction {
//   id: string
//   type: "purchase" | "transfer" | "recharge" | "share" | "convert"
//   title: string
//   description: string
//   amount: number
//   isDebit: boolean
//   date: string
//   status: "success" | "pending" | "failed"
//   category: string
// }

// const MOCK_TRANSACTIONS: Transaction[] = [
//   {
//     id: "1",
//     type: "purchase",
//     title: "Voice Daily 25 Min",
//     description: "Package purchase",
//     amount: 5,
//     isDebit: true,
//     date: "Dec 27, 10:30 AM",
//     status: "success",
//     category: "Packages",
//   },
//   {
//     id: "2",
//     type: "transfer",
//     title: "To: +251912345678",
//     description: "Balance transfer",
//     amount: 10,
//     isDebit: true,
//     date: "Dec 26, 3:45 PM",
//     status: "success",
//     category: "Transfers",
//   },
//   {
//     id: "3",
//     type: "recharge",
//     title: "Voucher Recharge",
//     description: "Airtime top-up",
//     amount: 100,
//     isDebit: false,
//     date: "Dec 25, 2:15 PM",
//     status: "success",
//     category: "Recharge",
//   },
//   {
//     id: "4",
//     type: "purchase",
//     title: "Internet Daily 100MB",
//     description: "Data package",
//     amount: 5,
//     isDebit: true,
//     date: "Dec 24, 9:00 AM",
//     status: "success",
//     category: "Packages",
//   },
//   {
//     id: "5",
//     type: "share",
//     title: "To: Abeba (Family)",
//     description: "Balance share",
//     amount: 25,
//     isDebit: true,
//     date: "Dec 23, 5:20 PM",
//     status: "success",
//     category: "Family",
//   },
//   {
//     id: "6",
//     type: "convert",
//     title: "Data to Voice",
//     description: "Resource conversion",
//     amount: 100,
//     isDebit: false,
//     date: "Dec 22, 11:10 AM",
//     status: "success",
//     category: "Conversion",
//   },
//   {
//     id: "7",
//     type: "transfer",
//     title: "From: +251987654321",
//     description: "Balance received",
//     amount: 50,
//     isDebit: false,
//     date: "Dec 21, 4:30 PM",
//     status: "success",
//     category: "Transfers",
//   },
//   {
//     id: "8",
//     type: "purchase",
//     title: "Voice Weekly 80 Min",
//     description: "Package purchase",
//     amount: 22,
//     isDebit: true,
//     date: "Dec 20, 1:00 PM",
//     status: "success",
//     category: "Packages",
//   },
// ]

// export function TransactionHistory({ onBack }: TransactionHistoryProps) {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [filterCategory, setFilterCategory] = useState("all")
//   const [sortBy, setSortBy] = useState("recent")

//   const categories = ["all", "Packages", "Transfers", "Recharge", "Family", "Conversion"]

//   const filteredTransactions = MOCK_TRANSACTIONS.filter((t) => {
//     const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase())
//     const matchesCategory = filterCategory === "all" || t.category === filterCategory
//     return matchesSearch && matchesCategory
//   }).sort((a, b) => {
//     if (sortBy === "recent") return 0
//     return 0
//   })

//   const getTransactionIcon = (type: string) => {
//     switch (type) {
//       case "purchase":
//         return <ArrowDown size={18} className="text-blue-600" />
//       case "transfer":
//         return <Send size={18} className="text-green-600" />
//       case "recharge":
//         return <TrendingUp size={18} className="text-amber-600" />
//       case "share":
//         return <Share2 size={18} className="text-purple-600" />
//       case "convert":
//         return <Shuffle size={18} className="text-teal-600" />
//       default:
//         return <ArrowDown size={18} />
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "success":
//         return "text-green-600 bg-green-50"
//       case "pending":
//         return "text-amber-600 bg-amber-50"
//       case "failed":
//         return "text-red-600 bg-red-50"
//       default:
//         return "text-gray-600 bg-gray-50"
//     }
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
//         <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
//           <ChevronLeft size={24} className="text-foreground" />
//         </button>
//         <h1 className="text-xl font-semibold text-foreground flex-1">Transaction History</h1>
//         <button className="p-2 hover:bg-muted rounded-lg transition">
//           <Download size={20} className="text-foreground" />
//         </button>
//       </div>

//       {/* Search & Filter */}
//       <div className="bg-card border-b border-border px-4 py-4 space-y-4">
//         {/* Search */}
//         <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
//           <Search size={18} className="text-muted-foreground" />
//           <input
//             type="text"
//             placeholder="Search transactions..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
//           />
//         </div>

//         {/* Category Filter */}
//         <div className="overflow-x-auto pb-1">
//           <div className="flex gap-2 min-w-min">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilterCategory(cat)}
//                 className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
//                   filterCategory === cat
//                     ? "bg-primary text-primary-foreground"
//                     : "bg-muted text-foreground hover:bg-muted/80"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Transactions List */}
//       <div className="px-4 py-6 space-y-3 pb-24">
//         {filteredTransactions.length > 0 ? (
//           filteredTransactions.map((transaction) => (
//             <div
//               key={transaction.id}
//               className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-all"
//             >
//               <div className="flex items-start gap-3">
//                 {/* Icon */}
//                 <div
//                   className={`p-2.5 rounded-lg ${
//                     transaction.type === "purchase"
//                       ? "bg-blue-100"
//                       : transaction.type === "transfer"
//                         ? "bg-green-100"
//                         : transaction.type === "recharge"
//                           ? "bg-amber-100"
//                           : transaction.type === "share"
//                             ? "bg-purple-100"
//                             : "bg-teal-100"
//                   }`}
//                 >
//                   {getTransactionIcon(transaction.type)}
//                 </div>

//                 {/* Details */}
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start mb-1">
//                     <h3 className="font-semibold text-foreground">{transaction.title}</h3>
//                     <span className={`text-sm font-bold ${transaction.isDebit ? "text-red-600" : "text-green-600"}`}>
//                       {transaction.isDebit ? "-" : "+"}
//                       {transaction.amount} ETB
//                     </span>
//                   </div>
//                   <p className="text-xs text-muted-foreground mb-2">{transaction.description}</p>
//                   <div className="flex items-center justify-between">
//                     <p className="text-xs text-muted-foreground">{transaction.date}</p>
//                     <span
//                       className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${getStatusColor(transaction.status)}`}
//                     >
//                       {transaction.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-muted-foreground">No transactions found</p>
//             <button
//               onClick={() => {
//                 setSearchQuery("")
//                 setFilterCategory("all")
//               }}
//               className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import { ChevronDown, Download, Filter } from "lucide-react";

interface Transaction {
	id: string;
	type: "topup" | "call" | "data" | "sms" | "payment";
	description: string;
	amount: number;
	date: string;
	time: string;
	status: "completed" | "pending" | "failed";
	icon: string;
}

export function TransactionHistory() {
	const [selectedFilter, setSelectedFilter] = useState("all");

	const transactions: Transaction[] = [
		{
			id: "1",
			type: "topup",
			description: "Airtime Top-up",
			amount: 100,
			date: "2026-02-05",
			time: "10:30 AM",
			status: "completed",
			icon: "📱",
		},
		{
			id: "2",
			type: "data",
			description: "Data Plan Activated",
			amount: 50,
			date: "2026-02-04",
			time: "02:15 PM",
			status: "completed",
			icon: "📊",
		},
		{
			id: "3",
			type: "call",
			description: "Call Minutes Used",
			amount: 5,
			date: "2026-02-03",
			time: "11:45 AM",
			status: "completed",
			icon: "☎️",
		},
		{
			id: "4",
			type: "payment",
			description: "Bill Payment",
			amount: 200,
			date: "2026-02-02",
			time: "09:20 AM",
			status: "completed",
			icon: "💳",
		},
		{
			id: "5",
			type: "sms",
			description: "SMS Package",
			amount: 15,
			date: "2026-02-01",
			time: "03:30 PM",
			status: "completed",
			icon: "💬",
		},
		{
			id: "6",
			type: "topup",
			description: "Airtime Top-up",
			amount: 50,
			date: "2026-01-31",
			time: "05:10 PM",
			status: "completed",
			icon: "📱",
		},
		{
			id: "7",
			type: "data",
			description: "Data Plan Activated",
			amount: 75,
			date: "2026-01-30",
			time: "01:00 PM",
			status: "pending",
			icon: "📊",
		},
		{
			id: "8",
			type: "topup",
			description: "Airtime Top-up",
			amount: 100,
			date: "2026-01-29",
			time: "08:45 AM",
			status: "failed",
			icon: "📱",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "completed":
				return "text-green-600 bg-green-50";
			case "pending":
				return "text-yellow-600 bg-yellow-50";
			case "failed":
				return "text-red-600 bg-red-50";
			default:
				return "text-gray-600 bg-gray-50";
		}
	};

	const getStatusLabel = (status: string) => {
		return status.charAt(0).toUpperCase() + status.slice(1);
	};

	return (
		<div className="w-full">
			{/* Header */}
			<div className="sticky top-0 z-40 bg-gradient-to-r from-lime-500 to-lime-600 text-white px-4 py-4">
				<div className="max-w-md mx-auto">
					<h1 className="text-2xl font-bold">Transaction History</h1>
				</div>
			</div>

			{/* Filter Section */}
			<div className="px-4 py-4 bg-background border-b border-border">
				<div className="max-w-md mx-auto flex items-center gap-2">
					<div className="flex-1 relative">
						<select
							value={selectedFilter}
							onChange={(e) => setSelectedFilter(e.target.value)}
							className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm">
							<option value="all">All Transactions</option>
							<option value="topup">Top-ups</option>
							<option value="data">Data Plans</option>
							<option value="call">Calls</option>
							<option value="sms">SMS</option>
							<option value="payment">Payments</option>
						</select>
						<ChevronDown
							size={16}
							className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground"
						/>
					</div>
					<button className="p-2 hover:bg-muted rounded-lg transition">
						<Download size={20} className="text-foreground" />
					</button>
				</div>
			</div>

			{/* Transactions List */}
			<div className="px-4 py-4 max-w-md mx-auto">
				{transactions.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-muted-foreground">No transactions found</p>
					</div>
				) : (
					<div className="space-y-3">
						{transactions.map((transaction) => (
							<div
								key={transaction.id}
								className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
								<div className="flex items-center gap-4 flex-1">
									<div className="text-2xl">{transaction.icon}</div>
									<div className="flex-1">
										<h3 className="font-medium text-foreground">
											{transaction.description}
										</h3>
										<p className="text-xs text-muted-foreground">
											{transaction.date} at {transaction.time}
										</p>
									</div>
								</div>
								<div className="text-right">
									<p className="font-semibold text-foreground">
										{transaction.amount > 0 ? "-" : "+"}₦{transaction.amount}
									</p>
									<span
										className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(
											transaction.status,
										)}`}>
										{getStatusLabel(transaction.status)}
									</span>
								</div>
							</div>
						))}
					</div>
				)}

				{/* Load More */}
				<div className="mt-6 text-center">
					<button className="text-lime-600 hover:text-lime-700 font-medium text-sm">
						Load More Transactions
					</button>
				</div>
			</div>
		</div>
	);
}
