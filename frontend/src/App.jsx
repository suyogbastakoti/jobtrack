import { useState } from "react";
import Navbar from "./components/Navbar";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";

const App = () => {

  const [applications, setApplications] = useState([]);

  const handleAddApplication = (newApplication)=>{
    setApplications((prev)=>[...prev, newApplication]);
  };

  const handleDeleteApplication = (id)=>{
    setApplications((prev)=>
      prev.filter((application)=>application._id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      <ApplicationForm 
        onAddApplication={handleAddApplication}
      />

      <ApplicationList 
        applications={applications}
        onDelete={handleDeleteApplication}
      />
    </div>
  );
};

export default App;
