"use client"

interface FilterPanelProps {
  selectedFrequency: string
  onFrequencyChange: (frequency: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function FilterPanel({ selectedFrequency, onFrequencyChange, sortBy, onSortChange }: FilterPanelProps) {
  return (
    <div className="space-y-4">
      {/* Sort Options */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 block">Sort By</label>
        <div className="flex gap-2 flex-wrap">
          {[
            { id: "popular", label: "Most Popular" },
            { id: "price-low", label: "Price: Low to High" },
            { id: "price-high", label: "Price: High to Low" },
          ].map((sort) => (
            <button
              key={sort.id}
              onClick={() => onSortChange(sort.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                sortBy === sort.id ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {sort.label}
            </button>
          ))}
        </div>
      </div>

      {/* Frequency Filter */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 block">Frequency</label>
        <div className="flex gap-2 flex-wrap">
          {[
            { id: "all", label: "All" },
            { id: "daily", label: "Daily" },
            { id: "weekly", label: "Weekly" },
            { id: "monthly", label: "Monthly" },
          ].map((freq) => (
            <button
              key={freq.id}
              onClick={() => onFrequencyChange(freq.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedFrequency === freq.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {freq.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
