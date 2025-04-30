'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ethers } from 'ethers';

interface Wallet {
    _id: string;
    accountName: string;
    accountAddress: string;
    accountType: string;
    balance: number;
}

export default function WalletManager() {
    const { data: session } = useSession();
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const [newWalletName, setNewWalletName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (session) {
            fetchWallets();
        }
    }, [session]);

    const fetchWallets = async () => {
        try {
            const response = await fetch('/api/wallet');
            if (!response.ok) throw new Error('Failed to fetch wallets');
            const data = await response.json();
            setWallets(data.wallets);
        } catch (err) {
            setError('Failed to load wallets');
            console.error(err);
        }
    };

    const createWallet = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newWalletName.trim()) {
            setError('Please enter a wallet name');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/wallet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountName: newWalletName }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Failed to create wallet');
            }

            const data = await response.json();
            setWallets([...wallets, data.wallet]);
            setNewWalletName('');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create wallet');
        } finally {
            setLoading(false);
        }
    };

    if (!session) {
        return <div>Please sign in to manage your wallets</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Wallets</h2>
            
            {/* Create New Wallet Form */}
            <form onSubmit={createWallet} className="mb-6">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newWalletName}
                        onChange={(e) => setNewWalletName(e.target.value)}
                        placeholder="Enter wallet name"
                        className="flex-1 p-2 border rounded"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create Wallet'}
                    </button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>

            {/* Wallets List */}
            <div className="grid gap-4">
                {wallets.map((wallet) => (
                    <div
                        key={wallet._id}
                        className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold">{wallet.accountName}</h3>
                        <p className="text-sm text-gray-600 break-all">
                            Address: {wallet.accountAddress}
                        </p>
                        <p className="text-sm">
                            Type: {wallet.accountType}
                        </p>
                        <p className="text-sm">
                            Balance: {ethers.formatEther(wallet.balance.toString())} ETH
                        </p>
                    </div>
                ))}
            </div>

            {wallets.length === 0 && (
                <p className="text-gray-500 text-center mt-4">
                    You don't have any wallets yet. Create one to get started!
                </p>
            )}
        </div>
    );
} 