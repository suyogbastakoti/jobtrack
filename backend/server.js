import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());

app.use(express.json());

//Test Route
app.get("/", (req, res)=>{
    res.send("JobTrack is running");
});

//MongoDB connection
mongoose
    .connect((process.env.MONGO_URI))
    .then(()=>{
        console.log("MongoDB connected successfully!");
        
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on PORT:${PORT}`);
        });
    })
    .catch((error)=>{
        console.log("MongoDB connection error:", error.message);
    });

