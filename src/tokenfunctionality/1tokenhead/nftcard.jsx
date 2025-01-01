import React from "react";

export default function NFTCard({ name, price, marketCap, volume, holders }) {
  return (
    <div className="w-full max-w-4xl rounded-lg bg-slate-900 text-white shadow">
      {/* Header */}
      <div className="flex flex-row items-start gap-4 p-6 border-b border-slate-800">
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

      {/* Body */}
      <div className="grid gap-6 p-6">
        {/* Trading */}
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Trading</h3>
            <button className="rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700">
              Connect Wallet
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full rounded-md border border-slate-800 bg-slate-800 px-3 py-2 text-sm focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="rounded-md bg-purple-600 px-3 py-2 text-sm hover:bg-purple-700">
              Buy
            </button>
            <button className="rounded-md border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800">
              Sell
            </button>
          </div>
        </div>

        {/* Bonding Curve Progress */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Bonding Curve Progress</h3>
          {/* Basic progress bar */}
          <div className="h-2 w-full rounded bg-slate-800">
            <div className="h-full w-[15%] rounded bg-purple-600" />
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
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{item.label}</span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
