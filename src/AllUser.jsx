import { FaUser } from "react-icons/fa6";
import { Link} from "react-router-dom";
import UserDetails from "./UserDetails";

const AllUser = () => {
    return (
        <div className="border border-4 border-green-500 w-3/4 mt-24  mx-auto h-[550px]">
      <h1 className="text-2xl font-bold text-center bg-green-300 p-3">
        User Management System
      </h1>
      <Link to="/addUser">
        <button className="flex text-xl font-semibold mt-10 ml-10 gap-2 text-blue-500 btn shadow-md">
          <FaUser size={22}/> New User
        </button>
      </Link>
      <div className="mt-8">
      <UserDetails/>
      </div>
    </div>
    );
};

export default AllUser;