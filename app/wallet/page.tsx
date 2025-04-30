'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function GenerateWalletModal() {
    const { data: session, status } = useSession();
    const [accountName, setAccountName] = useState('');

    useEffect(() => {
        console.log('Session status:', status);
        console.log('Session data:', session);
    }, [session, status]);

    const generateWallet = async () => {
        if (status === 'loading') {
            alert('Please wait while we check your session...');
            return;
        }

        if (status === 'unauthenticated' || !session?.user) {
            alert('Please sign in to generate a wallet');
            return;
        }

        try {
            if (!accountName.trim()) {
                alert('Please enter an account name');
                return;
            }

            const res = await fetch('/api/wallet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    userID: session.user.email, 
                    accountName 
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to generate wallet');
            }

            alert(`Wallet created successfully! Address: ${data.wallet.accountAddress}`);
        } catch (error) {
            console.error('Error generating wallet:', error);
            alert(error instanceof Error ? error.message : 'Failed to generate wallet');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <input 
                className='border-2 border-gray-300 rounded-md p-2' 
                value={accountName} 
                onChange={(e) => setAccountName(e.target.value)} 
                placeholder="Enter account name"
            />
            <button 
                onClick={generateWallet}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            >
                Generate Wallet
            </button>
        </div>
    );
}