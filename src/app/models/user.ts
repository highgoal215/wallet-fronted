import mongoose, { Schema, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
const UserData = models.User || mongoose.model('User', UserSchema);
export default UserData;