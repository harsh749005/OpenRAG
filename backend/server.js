import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userModel from "./models/userModel.js";
import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// Enable CORS
app.use(
    cors({
      origin: process.env.FRONTEND_URL,    // Replace with your frontend URL
      credentials: true,                   // Allow credentials (cookies)
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],  // Allowed HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
    })
  );
  
  // Handle preflight requests explicitly
  app.options('*', cors());  // This allows preflight requests for all routes
  

// app config
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
connectDB();

// app.post("/email", async (req, res) => {
//     console.log(process.env.API_KEY);
//   // Initialize MailerSend with your API key
//   const mailersend = new MailerSend({
//     apiKey:"mlsn.4b2709b233d65c21f783aac6d2597b01bd4795595c459b2dda478f4bb62d1edd", // Make sure your API key is correctly set
//   });
//   const sentFrom = new Sender("patelharsh90541@gmail.com", "harsh");
//   // Create a recipient object
//   const recipients = [new Recipient("patelharsh749005@gmail.com", "Recipient")];

//   // Set up the email parameters
//   const emailParams = new EmailParams()
//   .setFrom(sentFrom)
//   .setTo(recipients)
//   .setReplyTo(sentFrom)
//   .setSubject("This is a Subject")
//   .setHtml("<strong>This is the HTML content</strong>")
//   .setText("This is the text content");

//   try {
//     // Send the email and await the response
//     await mailersend.email.send(emailParams);

//     // Respond with a success message
//     res.status(200).json({ message: "Email sent successfully!" });
//     console.log("Email sent successfully");
//   } catch (error) {
//     // Handle any errors during the email sending process
//     console.error("Error sending email: ", error);
//     res
//       .status(500)
//       .json({ message: "Failed to send email.", error: error.message });
//   }
// });
// routes
app.post("/create", async (req, res) => {
  // , number, reached, description
  const { name, email, selectedOption, description } = req.body;
  const newUser = {
    name: name,
    email: email,
    reached: selectedOption,
    description: description,
  };
  const createdUser = await userModel.create(newUser);
  console.log(createdUser);
  res.json({ msg: "got it", data: createdUser });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = 8081
// starting the server
app.listen(PORT, () => {
  // no need for req and res here
  console.log(`Server is running on http://localhost:${PORT}`);
});
