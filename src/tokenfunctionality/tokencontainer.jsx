import React from "react";
import TokenHeader from "./1tokenhead/tokenheader";
import { useState, useEffect } from 'react'
import TradingViewChart from "./2tokenhead/tradingview";
import TradingPanel from "./2tokenhead/tradingpanel";




export default function TokenContainer() {
  const [currentPrice, setCurrentPrice] = useState(0.000032)
  
  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice((prev) => {
        const change = (Math.random() - 0.5) * 0.000001
        return Number((prev + change).toFixed(6))
      })
    }, 3000)
  
    return () => clearInterval(interval)
  }, [])
  
  const handleBuy = (amount) => {
    console.log(`Buying ${amount} TRX worth of NY`)
    // Implement buy logic here
  }
  
  const handleSell = (amount) => {
    console.log(`Selling ${amount} TRX worth of NY`)
    // Implement sell logic here
  }
  
  return (
    <div className="min-h-screen bg-slate-950 p-4">
      <div className="mx-auto max-w-7xl">
    <TokenHeader />
      </div>
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TradingViewChart />
        </div>
        <div>
      
          <TradingPanel
            currentPrice={currentPrice}
            onBuy={handleBuy}
            onSell={handleSell}
          />
        </div>
      </div>
    </div>
  );
}

