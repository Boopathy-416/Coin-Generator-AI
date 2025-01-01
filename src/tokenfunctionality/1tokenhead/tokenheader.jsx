import React, { useState, useEffect } from "react";
import { Copy, Star, ExternalLink } from "lucide-react";

export default function TokenHeader() {
  const [metrics, setMetrics] = useState({
    price: 0.000032,
    priceChange: 0.68,
    marketCap: "$8.49k",
    virtualLiquidity: "$18.12k",
    volume24h: "2,484.89 TRX",
    tokenCreated: "1H 20M",
  });

  const [isStarred, setIsStarred] = useState(false);
  const contractAddress = "TUTkf9WGeDrkLYRrjntAGDUub32KKHN1M";

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        price: prev.price + (Math.random() - 0.5) * 0.000001,
        priceChange: prev.priceChange + (Math.random() - 0.5) * 0.1,
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      alert("Contract address copied to clipboard");
    } catch (err) {
      alert("Failed to copy. Please try again.");
    }
  };

  const handleDLiveApply = () => {
    window.open("https://dlive.tv", "_blank");
  };

  const handleCEXApply = () => {
    window.open("https://www.binance.com/en/markets", "_blank");
  };

  return (
    <div className="w-full rounded-lg bg-black p-6 text-white shadow">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* NFT Image */}
        <div className="relative h-48 w-48 flex-shrink-0">
          <img
            src="https://giphy.com/static/img/error_pages/crying-cowbow-emoji.gif"
            alt="NEW YEAR($ NY)"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Token Info */}
        <div className="flex flex-1 flex-col gap-4">
          {/* Title + Star */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Token Name</h1>
              <button
                onClick={() => setIsStarred(!isStarred)}
                className="text-gray-400 hover:text-yellow-400"
                title="Favorite"
              >
                <Star
                  className={`h-5 w-5 ${
                    isStarred ? "fill-yellow-400 text-yellow-400" : ""
                  }`}
                />
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Created by:{" "}
              <a href="#" className="text-purple-400 hover:underline">
                TRC9...bh7s
              </a>
            </p>
          </div>

          {/* Contract + Copy */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Contract:</span>
            <code className="rounded bg-slate-800 p-1 text-xs">
              {contractAddress}
            </code>
            <button
              onClick={copyToClipboard}
              title="Copy contract address"
              className="flex h-5 w-5 items-center justify-center rounded bg-transparent text-gray-400 hover:text-white hover:bg-slate-100"
            >
              <Copy className="h-3 w-3" />
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-300">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro, architecto quibusdam rem saepe illum vitae quod. Similique amet corrupti possimus officia obcaecati necessitatibus atque? Nobis nam laborum eligendi doloremque!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleDLiveApply}
              className="inline-flex items-center gap-2 rounded-md bg-yellow-500 px-3 py-2 text-sm font-medium text-white hover:bg-yellow-600"
            >
              <ExternalLink className="h-4 w-4" />
              DLive Streaming Apply
            </button>
            <button
              onClick={handleCEXApply}
              className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              <ExternalLink className="h-4 w-4" />
              CEX Listing Apply
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {/* Price */}
            <div>
              <p className="text-sm text-gray-400">Price</p>
              <p className="font-mono text-lg font-bold">
                {metrics.price.toFixed(6)} TRX
                <span
                  className={`ml-2 text-sm ${
                    metrics.priceChange >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {metrics.priceChange >= 0 ? "+" : ""}
                  {metrics.priceChange.toFixed(2)}%
                </span>
              </p>
            </div>
            {/* Market Cap */}
            <div>
              <p className="text-sm text-gray-400">Market Cap</p>
              <p className="font-mono text-lg font-bold">
                {metrics.marketCap}
              </p>
            </div>
            {/* Virtual Liquidity */}
            <div>
              <p className="text-sm text-gray-400">Virtual Liquidity</p>
              <p className="font-mono text-lg font-bold">
                {metrics.virtualLiquidity}
              </p>
            </div>
            {/* 24H Volume */}
            <div>
              <p className="text-sm text-gray-400">24H Volume</p>
              <p className="font-mono text-lg font-bold">
                {metrics.volume24h}
              </p>
            </div>
            {/* Token Created */}
            <div>
              <p className="text-sm text-gray-400">Token Created</p>
              <p className="font-mono text-lg font-bold">
                {metrics.tokenCreated}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

