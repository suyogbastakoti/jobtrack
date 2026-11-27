import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        company:{
            type: String,
            required: true,
        },

        role:{
            type: String,
            required: true,
        },
        status:{
            type: String,
            enum: ["Applied", "Interview", "Rejected", "Accepted"],
            default: "Applied",
        },
    },
    { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;