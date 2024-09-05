import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = ({ addJobSubmit }) => {
  const [name, setName] = useState("");
 const [routeNo, setRouteNo] = useState("");
  const [location, setLocation] = useState("");
  const [completionStatus, setCompletionStatus] = useState(false);
  // const [salary, setSalary] = useState("Under $50K");
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [day,setDay]=useState("")

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
   

    const newJob = {
      name,
      routeNo,
      location,
      completionStatus,
      shopName,
     shopAddress,
        contactPhone, 
        day
    };
    addJobSubmit(newJob);
    toast.success("Job Addedd Successfully");
    return navigate("/jobs");
  };
  return (
    <section className="bg-black">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-blue-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Route No
              </label>
              <input
                type="number"
                id="routeNo"
                name="routeNo"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter Route Number"
                required
                value={routeNo}
                onChange={(e) => setRouteNo(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className=" flex items-center text-gray-700 font-bold mb-2">
                CompletionStatus
                <input
                  type="checkBox"
                  id="completionStatus"
                  name="completionStatus"
                  className="border form-checkbox rounded ml-8 mt-1"
                  defaultChecked={completionStatus}
                  value={completionStatus}
                  onChange={(e) => setCompletionStatus(e.target.checked)}
                />
                <p className="font-normal pl-2">Completed</p>
              </label>
            </div>

            <div className="mb-4">
              <label
                htmlFor="shopName"
                className="block text-gray-700 font-bold mb-2"
              >
                Shop Name
              </label>
              <input
                type="text"
                id="shopName"
                name="shopName"
                className="border rounded w-full py-2 px-3"
                placeholder="Shop Name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="shopAddress"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <textarea
                id="shopAddress"
                name="shopAddress"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Enter the address"
                value={shopAddress}
                required
                onChange={(e) => setShopAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactPhone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="number"
                id="contactPhone"
                name="contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Enter phone number"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="day"
                className="block text-gray-700 font-bold mb-2"
              >
                Day
              </label>
              <input
                type="day"
                id="day"
                name="day"
                className="border rounded w-full py-2 px-3"
                placeholder="Enter day"
                required
                value={day.toLowerCase()}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
