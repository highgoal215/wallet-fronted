import mongoose, { Schema, models } from 'mongoose';


const UserSchema = new Schema(
  {
    
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },


  },
  { timestamps: true }
);
const WalletSchema=new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required:true},
    accountName: { type: String, required: true },
    accountAddress:{type:String, required:true},
    accountType: { type: String, required: true },
    privatekey:{type:String, required:true},
    balance: { type: Number, required: true },
});
const UserData = models.User || mongoose.model('User', UserSchema);
const WalletData = models.Wallet || mongoose.model('Wallet', WalletSchema);
export default {UserData,WalletData};


