import mongoose from 'mongoose';

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://openrag09022025:openrag09022025@cluster0.wrah7.mongodb.net/OpenRAG').then(()=>console.log("DB Connected"))
}