import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();
  const {id} = useParams();
  const user = useLoaderData();
  console.log(user);
    console.log(id);


  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const genderValue = gender;
    const statusValue = status;
    const user = { name, email, genderValue, statusValue };
    console.log(user);

    fetch(`http://localhost:5000/users/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount) {
            Swal.fire({
                title: 'Updated!',
                text: 'User Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    })
  };
  return (
    <div className="border border-4 border-green-500 w-3/4 mt-12 md:mt-24  mx-auto h-[630px] md:h-[550px]">
      <h1 className="text-2xl font-bold text-center bg-green-300 p-3">
        User Management System
      </h1>
      <Link to="/">
        <button className="flex text-xl font-semibold mt-2 ml-10">
          <MdKeyboardDoubleArrowLeft size={30} /> All User
        </button>
      </Link>
      <div className="">
        <h2 className="text-xl font-bold  my-5 text-center">Update User</h2>
      </div>
      <form onSubmit={handleUpdateUser}>
        <div>
          <label
            htmlFor="name"
            className=" block mt-4 mb-2 mx-24 md:mx-32 text-xl text-gray-500"
          >
            Name
          </label>
          <input
            type="text"
            className="border border-2  border-green-300 p-2 rounded-md focus:outline-green-500 focus:border-4 md:w-3/4 mx-24 md:mx-32"
            placeholder="Name"
            defaultValue={user.name}
            name="name"
            id="name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className=" block mt-4 mb-2 mx-24 md:mx-32 text-xl text-gray-500"
          >
            Email
          </label>
          <input
            type="email"
            className="border border-2  border-green-300 p-2 rounded-md focus:outline-green-500 focus:border-4 md:w-3/4 mx-24 md:mx-32"
            name="email"
            defaultValue={user.email}
            placeholder="Email"
            id="email"
          />
        </div>
        <div className="md:flex mx-24 md:mx-32 mt-5">
          <h2 className="text-xl font-medium">Gender:</h2>
          <input
            type="radio"
            name="gender"
            defaultValue={user.gender}
            id="male"
            value="Male"
            className="mt-1 ml-14"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male" className="mt-1 font-medium ml-2">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="Female"
            className="mt-1 ml-14"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className="mt-1 font-medium ml-2">
            Female
          </label>
        </div>
        <div className="md:flex mx-24 md:mx-32 mt-5">
          <h2 className="text-xl font-medium">Status:</h2>
          <input
            type="radio"
            name="status"
            id="active"
            value="Active"
            className="mt-1 ml-14"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="active" className="mt-1 font-medium ml-2">
            Active
          </label>
          <input
            type="radio"
            name="status"
            id="inactive"
            value="Inactive"
            className="mt-1 ml-14"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label htmlFor="inactive" className="mt-1 font-medium ml-2">
            Inactive
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="Save"
            className="btn mt-10 bg-green-400 hover:bg-green-500 w-full md:w-3/4  md:ml-32"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
