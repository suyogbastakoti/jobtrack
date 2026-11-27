const Navbar = () => {

  
  return (
    
      <nav className="bg-blue-500 flex justify-between items-center px-8 py-2">
        <h1 className="text-2xl text-white font-bold">
          JobTrack
        </h1>

        <div className="flex gap-2 items-center">
          <button className="bg-white px-3 py-2 font-semibold border rounded-2xl text-blue-500 hover:text-blue-600 hover:bg-gray-300">
            Login
          </button>

          <button className="bg-white px-3 py-2 font-semibold border rounded-2xl text-blue-500 hover:text-blue-600 hover:bg-gray-300">
            SignUp
          </button>
        </div>
        
      </nav>
  );
};

export default Navbar;
