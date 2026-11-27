import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

//get all applications
router.get("/", async(req,res)=>{
    try {
        const applications = await Application.find();
        res.status(200).json(applications);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//post a new application
router.post("/", async(req, res)=>{
    try {
        const newApplication = await Application.create(req.body);
        res.status(201).json(newApplication);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

//PUT - update an application

router.put("/:id", async(req, res)=>{
    try {
        const updatedApplication = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        
        if(!updatedApplication){
            return res.status(404).json({message: "Application not found!"});
        }

        res.status(200).json(updatedApplication);

    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

//DELETE an application
router.delete("/:id", async(req, res)=>{
    try {
        const deletedApplication = await Application.findByIdAndDelete(
            req.params.id
        );

        if(!deletedApplication){
            return res.status(404).json({message: "Application not found"});
        }

        res.status(200).json({message: "Application deleted successfully1"});
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;