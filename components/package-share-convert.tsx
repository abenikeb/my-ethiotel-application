"use client"

import { useState } from "react"
import { ChevronLeft, Shuffle, Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

type Mode = "menu" | "transfer" | "convert" | "share" | "success"

interface PackageShareConvertProps {
  onBack: () => void
}

export function PackageShareConvert({ onBack }: PackageShareConvertProps) {
  const [mode, setMode] = useState<Mode>("menu")
  const [selectedOperation, setSelectedOperation] = useState<string>("")
  const [amount, setAmount] = useState("")
  const [recipientPhone, setRecipientPhone] = useState("")
  const [error, setError] = useState("")

  // Mock data for active packages
  const activePackages = {
    data: { available: 5000, unit: "MB" },
    voice: { available: 250, unit: "Min" },
    sms: { available: 75, unit: "SMS" },
  }

  const handleTransfer = () => {
    setError("")
    if (!recipientPhone) {
      setError("Please enter a phone number")
      return
    }
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }
    setMode("success")
  }

  const handleConvert = () => {
    setError("")
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }
    setMode("success")
  }

  const handleShare = () => {
    setError("")
    if (!recipientPhone) {
      setError("Please enter a phone number")
      return
    }
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }
    setMode("success")
  }

  if (mode === "menu") {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground flex-1">Package Share/Convert</h1>
        </div>

        <div className="max-w-md mx-auto p-4 pb-24 space-y-6">
          {/* Active Packages Overview */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <p className="text-xs text-blue-600 font-semibold mb-1">Data</p>
              <p className="text-2xl font-bold text-blue-700">{activePackages.data.available}</p>
              <p className="text-xs text-blue-600">MB</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <p className="text-xs text-green-600 font-semibold mb-1">Voice</p>
              <p className="text-2xl font-bold text-green-700">{activePackages.voice.available}</p>
              <p className="text-xs text-green-600">Min</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
              <p className="text-xs text-purple-600 font-semibold mb-1">SMS</p>
              <p className="text-2xl font-bold text-purple-700">{activePackages.sms.available}</p>
              <p className="text-xs text-purple-600">SMS</p>
            </div>
          </div>

          {/* Operations */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground px-2">Select Operation</h3>

            {/* Transfer Package Resource */}
            <button
              onClick={() => setMode("transfer")}
              className="w-full bg-card rounded-xl p-4 border border-border hover:border-primary hover:shadow-md transition-all text-left"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Send size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Transfer Package Resource</h4>
                    <p className="text-xs text-muted-foreground">Send unused data, voice, or SMS to other users</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-muted-foreground" />
              </div>
            </button>

            {/* Convert Resources */}
            <button
              onClick={() => setMode("convert")}
              className="w-full bg-card rounded-xl p-4 border border-border hover:border-primary hover:shadow-md transition-all text-left"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Shuffle size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Convert Resources</h4>
                    <p className="text-xs text-muted-foreground">Convert unused data to voice, voice to SMS, etc.</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-muted-foreground" />
              </div>
            </button>

            {/* Balance Transfer (shown for reference) */}
            <button
              onClick={() => setMode("share")}
              className="w-full bg-card rounded-xl p-4 border border-border hover:border-primary hover:shadow-md transition-all text-left"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Send size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Family Balance Share</h4>
                    <p className="text-xs text-muted-foreground">Share balance with family group members</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-muted-foreground" />
              </div>
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 space-y-2">
            <p className="text-xs font-semibold text-blue-900">How it works:</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Transfer: Send resources to another number instantly</li>
              <li>• Convert: Change resource types at 1:1 rate</li>
              <li>• Share: Distribute balance among family members</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (mode === "transfer") {
    return (
      <TransferPackageResource
        onBack={() => setMode("menu")}
        onSuccess={() => {
          setSelectedOperation("transfer")
          setMode("success")
        }}
        activePackages={activePackages}
      />
    )
  }

  if (mode === "convert") {
    return (
      <ConvertResources
        onBack={() => setMode("menu")}
        onSuccess={() => {
          setSelectedOperation("convert")
          setMode("success")
        }}
        activePackages={activePackages}
      />
    )
  }

  if (mode === "share") {
    return (
      <FamilyBalanceShare
        onBack={() => setMode("menu")}
        onSuccess={() => {
          setSelectedOperation("share")
          setMode("success")
        }}
      />
    )
  }

  // Success Screen
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground flex-1">Operation Complete</h1>
      </div>

      <div className="max-w-md mx-auto p-4 pb-24">
        <div className="space-y-6 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Success!</h2>
            <p className="text-sm text-muted-foreground">
              Your {selectedOperation} operation has been completed successfully
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={onBack}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => setMode("menu")}
              className="w-full py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all"
            >
              Perform Another Operation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function TransferPackageResource({ onBack, onSuccess, activePackages }: any) {
  const [resourceType, setResourceType] = useState("data")
  const [amount, setAmount] = useState("")
  const [recipientPhone, setRecipientPhone] = useState("")
  const [error, setError] = useState("")

  const handleTransfer = () => {
    setError("")
    if (!recipientPhone) {
      setError("Please enter a phone number")
      return
    }
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }
    onSuccess()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground">Transfer Resources</h1>
      </div>

      <div className="max-w-md mx-auto p-4 pb-24 space-y-6">
        {/* Resource Type Selection */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-3 block">Resource Type</label>
          <div className="space-y-2">
            {[
              { type: "data", label: "Data", available: activePackages.data.available, unit: "MB" },
              { type: "voice", label: "Voice", available: activePackages.voice.available, unit: "Min" },
              { type: "sms", label: "SMS", available: activePackages.sms.available, unit: "SMS" },
            ].map((r) => (
              <button
                key={r.type}
                onClick={() => setResourceType(r.type)}
                className={`w-full p-3 rounded-lg border transition-all text-left ${
                  resourceType === r.type ? "border-primary bg-primary/10" : "border-border hover:border-primary"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-foreground">{r.label}</p>
                    <p className="text-xs text-muted-foreground">
                      Available: {r.available} {r.unit}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recipient Phone */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Recipient Phone</label>
          <input
            type="tel"
            placeholder="+251"
            value={recipientPhone}
            onChange={(e) => setRecipientPhone(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-lg text-foreground placeholder-muted-foreground outline-none"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Amount to Transfer</label>
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-lg text-foreground placeholder-muted-foreground outline-none"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
            <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <button
          onClick={handleTransfer}
          disabled={!recipientPhone || !amount}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-all"
        >
          Transfer Now
        </button>
      </div>
    </div>
  )
}

function ConvertResources({ onBack, onSuccess, activePackages }: any) {
  const [fromType, setFromType] = useState("data")
  const [toType, setToType] = useState("voice")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")

  const handleConvert = () => {
    setError("")
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }
    onSuccess()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground">Convert Resources</h1>
      </div>

      <div className="max-w-md mx-auto p-4 pb-24 space-y-6">
        {/* From Resource */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Convert From</label>
          <select
            value={fromType}
            onChange={(e) => setFromType(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-lg text-foreground bg-card outline-none"
          >
            <option value="data">Data (Available: 5000 MB)</option>
            <option value="voice">Voice (Available: 250 Min)</option>
            <option value="sms">SMS (Available: 75 SMS)</option>
          </select>
        </div>

        {/* Conversion Arrow */}
        <div className="flex justify-center py-2">
          <Shuffle size={24} className="text-primary" />
        </div>

        {/* To Resource */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Convert To</label>
          <select
            value={toType}
            onChange={(e) => setToType(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-lg text-foreground bg-card outline-none"
          >
            <option value="voice">Voice (Min)</option>
            <option value="sms">SMS (SMS)</option>
            <option value="data">Data (MB)</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Amount to Convert</label>
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-lg text-foreground placeholder-muted-foreground outline-none"
          />
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-800">Conversion rate: 1:1 (1 unit of one resource = 1 unit of another)</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
            <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <button
          onClick={handleConvert}
          disabled={!amount}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-all"
        >
          Convert Now
        </button>
      </div>
    </div>
  )
}

function FamilyBalanceShare({ onBack, onSuccess }: any) {
  const [amount, setAmount] = useState("")
  const [selectedMember, setSelectedMember] = useState("")
  const [error, setError] = useState("")

  const familyMembers = [
    { id: "1", name: "Abeba Tekle", phone: "+251912345678", relation: "Spouse" },
    { id: "2", name: "Henok Misganaw", phone: "+251987654321", relation: "Son" },
    { id: "3", name: "Sara Abebe", phone: "+251923456789", relation: "Sister" },
  ]

  const handleShare = () => {
    setError("")
    if (!selectedMember) {
      setError("Please select a family member")
      return
    }
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }
    onSuccess()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground">Family Balance Share</h1>
      </div>

      <div className="max-w-md mx-auto p-4 pb-24 space-y-6">
        {/* Family Members */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-3 block">Select Member</label>
          <div className="space-y-2">
            {familyMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member.id)}
                className={`w-full p-3 rounded-lg border transition-all text-left ${
                  selectedMember === member.id ? "border-primary bg-primary/10" : "border-border hover:border-primary"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.relation}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{member.phone}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Amount to Share</label>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-lg text-foreground placeholder-muted-foreground outline-none"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
            <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <button
          onClick={handleShare}
          disabled={!selectedMember || !amount}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-all"
        >
          Share Now
        </button>
      </div>
    </div>
  )
}
