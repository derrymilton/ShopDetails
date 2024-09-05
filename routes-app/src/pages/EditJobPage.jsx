import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const EditJobPage = ({ updateJobSubmit }) => {
  const { id } = useParams();
  const job = useLoaderData();
  const [name, setName] = useState(job.name);
   const [routeNo, setRouteNo] = useState(job.routeNo);
  const [location, setLocation] = useState(job.location);
  const [completionStatus, setCompletionStatus] = useState(
    job.completionStatus
  );
  // const [salary, setSalary] = useState(job.salary);
  const [shopName, setShopName] = useState(job.shopName);
  const [shopAddress, setShopAddress] = useState(job.shopAddress);
  const [contactPhone, setContactPhone] = useState(job.contactPhone);
  const [day, setDay] = useState(job.day);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      name,
      routeNo,
      location,
      completionStatus,
      shopName,
      shopAddress,
      contactPhone,
      day,
    };
   
    updateJobSubmit(updatedJob);
    toast.success("Job Updated Successfully");
    return navigate(`/jobs/${id}`);
  };
  return (
    <section className="bg-black">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-blue-200 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Update Details
            </h2>

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
                htmlFor="shop_address"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <textarea
                id="shop_address"
                name="shop_address"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Enter the address"
                required
                value={shopAddress}
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
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="number"
                id="contact_phone"
                name="contact_phone"
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
