"use client"

import { useState } from "react"
import { ChevronLeft, Search, Download, ArrowDown, TrendingUp, Send, Share2, Shuffle } from "lucide-react"

interface TransactionHistoryProps {
  onBack: () => void
}

interface Transaction {
  id: string
  type: "purchase" | "transfer" | "recharge" | "share" | "convert"
  title: string
  description: string
  amount: number
  isDebit: boolean
  date: string
  status: "success" | "pending" | "failed"
  category: string
}

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    type: "purchase",
    title: "Voice Daily 25 Min",
    description: "Package purchase",
    amount: 5,
    isDebit: true,
    date: "Dec 27, 10:30 AM",
    status: "success",
    category: "Packages",
  },
  {
    id: "2",
    type: "transfer",
    title: "To: +251912345678",
    description: "Balance transfer",
    amount: 10,
    isDebit: true,
    date: "Dec 26, 3:45 PM",
    status: "success",
    category: "Transfers",
  },
  {
    id: "3",
    type: "recharge",
    title: "Voucher Recharge",
    description: "Airtime top-up",
    amount: 100,
    isDebit: false,
    date: "Dec 25, 2:15 PM",
    status: "success",
    category: "Recharge",
  },
  {
    id: "4",
    type: "purchase",
    title: "Internet Daily 100MB",
    description: "Data package",
    amount: 5,
    isDebit: true,
    date: "Dec 24, 9:00 AM",
    status: "success",
    category: "Packages",
  },
  {
    id: "5",
    type: "share",
    title: "To: Abeba (Family)",
    description: "Balance share",
    amount: 25,
    isDebit: true,
    date: "Dec 23, 5:20 PM",
    status: "success",
    category: "Family",
  },
  {
    id: "6",
    type: "convert",
    title: "Data to Voice",
    description: "Resource conversion",
    amount: 100,
    isDebit: false,
    date: "Dec 22, 11:10 AM",
    status: "success",
    category: "Conversion",
  },
  {
    id: "7",
    type: "transfer",
    title: "From: +251987654321",
    description: "Balance received",
    amount: 50,
    isDebit: false,
    date: "Dec 21, 4:30 PM",
    status: "success",
    category: "Transfers",
  },
  {
    id: "8",
    type: "purchase",
    title: "Voice Weekly 80 Min",
    description: "Package purchase",
    amount: 22,
    isDebit: true,
    date: "Dec 20, 1:00 PM",
    status: "success",
    category: "Packages",
  },
]

export function TransactionHistory({ onBack }: TransactionHistoryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const categories = ["all", "Packages", "Transfers", "Recharge", "Family", "Conversion"]

  const filteredTransactions = MOCK_TRANSACTIONS.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === "all" || t.category === filterCategory
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    if (sortBy === "recent") return 0
    return 0
  })

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "purchase":
        return <ArrowDown size={18} className="text-blue-600" />
      case "transfer":
        return <Send size={18} className="text-green-600" />
      case "recharge":
        return <TrendingUp size={18} className="text-amber-600" />
      case "share":
        return <Share2 size={18} className="text-purple-600" />
      case "convert":
        return <Shuffle size={18} className="text-teal-600" />
      default:
        return <ArrowDown size={18} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600 bg-green-50"
      case "pending":
        return "text-amber-600 bg-amber-50"
      case "failed":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground flex-1">Transaction History</h1>
        <button className="p-2 hover:bg-muted rounded-lg transition">
          <Download size={20} className="text-foreground" />
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-card border-b border-border px-4 py-4 space-y-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
          <Search size={18} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
          />
        </div>

        {/* Category Filter */}
        <div className="overflow-x-auto pb-1">
          <div className="flex gap-2 min-w-min">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  filterCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="px-4 py-6 space-y-3 pb-24">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className={`p-2.5 rounded-lg ${
                    transaction.type === "purchase"
                      ? "bg-blue-100"
                      : transaction.type === "transfer"
                        ? "bg-green-100"
                        : transaction.type === "recharge"
                          ? "bg-amber-100"
                          : transaction.type === "share"
                            ? "bg-purple-100"
                            : "bg-teal-100"
                  }`}
                >
                  {getTransactionIcon(transaction.type)}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-foreground">{transaction.title}</h3>
                    <span className={`text-sm font-bold ${transaction.isDebit ? "text-red-600" : "text-green-600"}`}>
                      {transaction.isDebit ? "-" : "+"}
                      {transaction.amount} ETB
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{transaction.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${getStatusColor(transaction.status)}`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No transactions found</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setFilterCategory("all")
              }}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
