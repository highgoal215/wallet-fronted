import {NextRequest,NextResponse} from "next/server";
import {connectDB} from "@/app/lib/mongodb";
import WalletData from "@/app/models/user";
import {ethers} from "ethers";

export async function POST(req:NextRequest){
    try {
        const {userID, accountName}=await req.json();
        
        if (!userID || !accountName) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        await connectDB();
        const wallet=ethers.Wallet.createRandom();
        const newWallet=new WalletData.WalletData({
            userID,
            accountName,
            accountAddress:wallet.address,
            accountType:"Ethereum",
            privatekey:wallet.privateKey,
            balance:0,
        });
        await newWallet.save();
        return NextResponse.json(
            {message:"Wallet created successfully",wallet:newWallet},
            {status:201}
        );
    } catch (error) {
        console.error("Wallet creation error:", error);
        return NextResponse.json(
            { message: "Failed to create wallet" },
            { status: 500 }
        );
    }
}