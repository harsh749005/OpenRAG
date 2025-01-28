import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userModel from './models/userModel.js';

// app config
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use( cors());

// db connection
connectDB();
// routes
app.post('/create',async (req,res)=>{
    // , number, reached, description 
    const { name, email ,selectedOption,description} = req.body;
    const newUser = {name: name, email: email,reached:selectedOption,description:description};
    const createdUser = await userModel.create(newUser);
    console.log(createdUser);
    res.json({msg:"got it",data: createdUser});
})

app.get('/', (req, res) => {

    res.send('Hello World!');
});

// starting the server
app.listen(process.env.PORT, () => {  // no need for req and res here
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
