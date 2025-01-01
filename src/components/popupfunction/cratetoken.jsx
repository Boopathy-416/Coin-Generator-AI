import React, { useState, useRef } from "react";
import { Upload } from "lucide-react";

function CreateToken() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [showMors, setShowMors] = useState(true); // FIXED: Added missing state
  const fileInputRef = useRef(null); // FIXED: Reference for file input

  const handleOptionChange = (event) => setSelectedOption(event.target.value);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) console.log("File dropped:", file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) console.log("File selected:", file);
  };

  return (
    <form className="space-y-6 p-6 max-w-2xl mx-auto text-white bg-[#0000004a] backdrop-blur-md rounded-md border-gray-800 shadow-lg"
    style={{
      fontFamily:"Akira",
      letterSpacing:"0.06em"
    }}>
      <div className="space-y-4 uppercase">
        <div>
          <label className="block mb-2">Name</label>
          <input className="w-full p-2 bg-[#00000057] border border-black text-white rounded" />
        </div>

        <div>
          <label className="block mb-2">Ticker</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              type="text"
              className="w-full p-2 bg-[#00000057] border border-black text-white rounded pl-8"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <textarea className="w-full p-2 bg-[#00000057] border border-black text-white rounded min-h-[100px]" />
        </div>

        <div>
          <label className="block mb-2">Image</label>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? "border-blue-500 bg-blue-500/10" : "border-gray-700"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-8 w-8 text-red-800 mb-2" />
            <p className="text-gray-400 text-sm mb-2">
              Drag and drop an image
            </p>
            <input
              type="file"
              ref={fileInputRef} // FIXED: Used ref for input
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="px-4 py-2 bg-black text-white border text-sm border-black rounded"
              onClick={() => fileInputRef.current.click()} // FIXED: Trigger file input via ref
            >
              Select File
            </button>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
        >
          Show more options
          <span
            className={`transition-transform ${showMore ? "rotate-180" : ""}`}
          >
            ↓
          </span>
        </button>

        {showMore && (
          <div className="mt-4 space-y-4 uppercase">
            <div>
              <label className="block mb-2">Select Type</label>
              <div className="space-x-10">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="inflationary"
                    checked={selectedOption === "inflationary"}
                    onChange={handleOptionChange}
                  />
                  Inflationary
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="deflationary"
                    checked={selectedOption === "deflationary"}
                    onChange={handleOptionChange}
                  />
                  Deflationary
                </label>
              </div>
            </div>

            {showMors && selectedOption === "inflationary" && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block mb-2">Total Supply</label>
                  <input
                    type="number"
                    className="w-full p-2 bg-[#00000057] border border-black text-white rounded"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <button className="w-full bg-[#ffffff27] hover:bg-green-900 text-white p-2 rounded">
        Create Coin
      </button>

      <div className="text-center space-y-2">
        <p className="text-green-800 text-sm">
          Connect your wallet and sign in to create a coin
        </p>
        <p className="text-gray-400 text-sm">
          When your coin completes its bonding curve, you receive 0.5 SOL
        </p>
      </div>
    </form>
  );
}

export default CreateToken;
