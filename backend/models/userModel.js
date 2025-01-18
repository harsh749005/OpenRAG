import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    reached:{type:String, required:true},
    description:{type:String, required:true},
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema)

export default userModel;