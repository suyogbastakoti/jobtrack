import { useState } from "react";

const ApplicationForm = ({onAddApplication}) => {

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!company || !role){
            return;
        }

        onAddApplication({
            company,
            role,
            status:"Applied",
        });

        setCompany("");
        setRole("");
    };

  return (
    <form 
        onSubmit={handleSubmit}
        className="flex flex-col max-w-2/3 mt-10 mx-auto bg-white p-6 rounded-lg shadow space-y-4"
    >
        <h2 className="text-xl text-center font-bold">
            Add Application
        </h2>

        <input 
            type="text"
            value={company}
            onChange={(e)=>setCompany(e.target.value)}
            placeholder="Company Name"
            className="w-full p-3 border rounded-xl" 
        />

        <input 
            type="text" 
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            placeholder="Job Role"
            className="w-full p-3 border rounded-xl"
        />

        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-xl shadow text-white px-3 py-2"
        >
            Add Application
        </button>
    </form>
  );
};

export default ApplicationForm;
