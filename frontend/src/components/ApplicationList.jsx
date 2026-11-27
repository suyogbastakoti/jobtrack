
const ApplicationList = ({applications, onDelete}) => {
  return (
    <div className="bg-white mt-6 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        My Application
      </h2>

      {applications.length === 0 ? (
        <p>No Applications yet</p>
      ):(
        applications.map((application)=>(
            <div
                key={application._id}
                className="flex justify-between items-center border-b py-4"
            >
                <div>
                    <h3 className="font-semibold">
                        {application.company}
                    </h3>

                    <p className="text-gray-500">
                        {application.role}
                    </p>

                    <span className="text-sm text-blue-600">
                        {application.status}
                    </span>
                </div>

                <button 
                    onClick={()=> onDelete(application._id)}
                    className="text-red-500"
                >
                    Delete
                </button>
            </div>
        ))
      )}
    </div>
  );
};

export default ApplicationList;
