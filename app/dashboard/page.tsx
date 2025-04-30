"use client"
import { useState } from "react";
import WalletList from "../component/walletlist";

export default function Dashboard() {
  const [isWalletListOpen, setIsWalletListOpen] = useState(false);

  return (
    <div className="flex justify-end w-full h-screen p-4 text-black bg-gradient-to-r from-yellow-200 to-green-700">
      <button 
        onClick={() => setIsWalletListOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 h-10 flex justify-center items-center rounded hover:bg-blue-700"
      >
        Generate Wallet
      </button>
      {isWalletListOpen && <WalletList />}
    </div>
  )
}