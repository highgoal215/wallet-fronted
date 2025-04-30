import mongoose, { Schema, models } from 'mongoose';

const WalletSchema=new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required:true},
    accountName: { type: String, required: true },
    accountAddress:{type:String, required:true},
    accountType: { type: String, required: true },
    privatekey:{type:String, required:true},
    balance: { type: Number, required: true },
});
const WalletData = models.Wallet || mongoose.model('Wallet', WalletSchema);
export default WalletData;