import React from "react"

export default function NFTCard({ name, price, marketCap, volume, holders }) {
  return (
    <div className="w-full max-w-4xl bg-slate-900 text-white rounded-md">
      {/* Header Section */}
      <div className="flex flex-row items-start gap-4 p-6">
        <div className="relative h-32 w-32">
          <img
            alt={name}
            className="rounded-lg object-cover"
            src="/placeholder.svg?height=128&width=128"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-400">Price</p>
              <p className="font-semibold">{price}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Market Cap</p>
              <p className="font-semibold">{marketCap}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Volume</p>
              <p className="font-semibold">{volume}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Holders</p>
              <p className="font-semibold">{holders}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid gap-6 p-6">
        {/* Trading Controls */}
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Trading</h3>
            <button className="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 rounded">
              Connect Wallet
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                className="bg-slate-800 w-full p-2 rounded"
                placeholder="Enter amount"
                type="number"
              />
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
              Buy
            </button>
            <button className="border border-gray-500 text-gray-300 px-4 py-2 rounded hover:bg-gray-700 hover:text-white">
              Sell
            </button>
          </div>
        </div>

        {/* Bonding Curve Progress */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Bonding Curve Progress</h3>
          <div className="relative w-full h-2 bg-slate-800 rounded">
            {/* Adjust width inline for the progress value */}
            <div
              className="absolute left-0 top-0 h-full bg-purple-600 rounded"
              style={{ width: "15%" }}
            />
          </div>
          <p className="text-xs text-gray-400">Current Progress: 0.11%</p>
        </div>

        {/* Holder Distribution */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Holder Distribution</h3>
          <div className="space-y-2">
            {[
              { label: "TBC_ZAxx", value: "88.85% (Bonding Curve)" },
              { label: "HOLD_xxYy", value: "8.36% (Creator)" },
              { label: "TCT_zzWw", value: "0%" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-gray-400">{item.label}</span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
