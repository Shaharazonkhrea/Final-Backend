import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        displayName: {
            type: String,
            required: true
        },
        uid: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true 
        }
    },
    { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
