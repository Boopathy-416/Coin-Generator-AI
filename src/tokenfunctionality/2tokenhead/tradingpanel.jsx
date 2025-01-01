import React, { useState } from "react";

export default function TradingPanel({ currentPrice, onBuy, onSell }) {
  // States
  const [amount, setAmount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [activeTab, setActiveTab] = useState("buy"); // 'buy' or 'sell'

  // Hardcode a user balance to demonstrate percentage-based selling
  const userBalance = 1000; // e.g., 1000.00 TRX

  // Separate quick amounts for Buy vs Sell
  const buyQuickAmounts = [100, 500, 1000, 5000];
  const sellQuickPercentages = [25, 50, 75, 100];

  // Pick the quick values array based on active tab
  const quickAmounts =
    activeTab === "buy" ? buyQuickAmounts : sellQuickPercentages;

  // Handle input changes
  const handleAmountChange = (value) => {
    // Only allow numbers and one decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  // Quick-amount handler
  const handleQuickAmount = (value) => {
    setAmount(value.toString());
  };

  // Submit handler
  const handleSubmit = () => {
    if (!isConnected) {
      alert("Please connect wallet first");
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // If we're selling, interpret the user input as a percentage of userBalance
    if (activeTab === "sell") {
      // Convert percentage to actual TRX amount
      const trxToSell = (userBalance * numAmount) / 100;
      onSell(trxToSell);
    } else {
      // activeTab === 'buy'
      onBuy(numAmount);
    }
  };

  // Simulate wallet connection
  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="w-full max-w-md bg-[#000000] rounded-lg p-4 text-white">
      {/* Buy/Sell Tabs */}
      <div className="flex mb-4">
        <button
          onClick={() => {
            setActiveTab("buy");
            setAmount("");
          }}
          className={`flex-1 py-2 rounded-lg ${
            activeTab === "buy"
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => {
            setActiveTab("sell");
            setAmount("");
          }}
          className={`flex-1 py-2 rounded-lg ${
            activeTab === "sell"
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-400"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Token Switch (Just an example text) */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <span>switch to NY</span>
        <span className="text-gray-400">Current Price: {currentPrice} TRX</span>
      </div>

      {/* Amount Input */}
      <div className="relative mb-4">
        <input
          type="text"
          value={amount}
          onChange={(e) => handleAmountChange(e.target.value)}
          placeholder={
            activeTab === "buy"
              ? "Enter the TRX amount"
              : "Enter the percentage (%)"
          }
          className="w-full bg-[#2a2b33] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {/* Suffix changes based on buy/sell */}
          <span>{activeTab === "buy" ? "TRX" : "%"}</span>
          <img
            src="/placeholder.svg?height=24&width=24"
            alt="TRX"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>

      {/* Quick Amount Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {quickAmounts.map((val) => (
          <button
            key={val}
            onClick={() => handleQuickAmount(val)}
            className="bg-[#2a2b33] rounded-lg py-2 text-sm hover:bg-[#3a3b43]"
          >
            {/* If selling, show val% otherwise show val TRX */}
            {activeTab === "buy" ? `${val} TRX` : `${val}%`}
          </button>
        ))}
      </div>

      {/* Balance */}
      <div className="text-sm text-gray-400 mb-4">
        Balance: {isConnected ? `${userBalance.toFixed(2)} TRX` : "-- TRX"}
      </div>

      {/* Connect/Trade Button */}
      {!isConnected ? (
        <button
          onClick={handleConnect}
          className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg py-3 flex items-center justify-center gap-2"
        >
          {/* Inline Wallet SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 7c0-1.1-.9-2-2-2H5C3.9 5 3 5.9 3 7v0c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z" />
            <path d="M21 7v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7" />
            <path d="M18 12l-3 0" />
          </svg>
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 rounded-lg py-3"
        >
          {activeTab === "buy" ? "Buy NY" : "Sell NY"}
        </button>
      )}
    </div>
  );
}
