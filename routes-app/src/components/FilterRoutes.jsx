import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const FilterRoutes = () => {

  const [filteredValues, setFilteredValues] = useState({ routeNo: "", day: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFilteredValues({
      ...filteredValues,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = (e) => {
    e.preventDefault();
     navigate("/jobs", { state: { filteredValues } });
  };
  return (
    <>
      <h1 className="flex justify-center items-center">
        Fill the below details to start your Day
      </h1>

      <section className=" flex justify-center items-center rounded-md">
        <div className="bg-indigo-500 p-5">
          <form>
            <div className="mb-4">
              <label
                
                className="block text-gray-700 font-bold mb-2"
              >
                Route No :
              </label>
              <input
                type="text"
                name='routeNo'
                placeholder="Enter Route Number"
                className="border rounded w-full py-2 px-3 mb-2"
                value={filteredValues.routeNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
               
                className="block text-gray-700 font-bold mb-2"
              >
                Day :
              </label>
              <input
                type="text"
                name='day'
                placeholder="Enter Day"
                className="border rounded w-full py-2 px-3 mb-2"
                value={filteredValues.day.toLowerCase()}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <button
                className="bg-indigo-200 hover:bg-indigo-300 text-gray-700 font-bold py-2 px-4 rounded-full  focus:outline-none focus:shadow-outline"
                onClick={applyFilters}
              >
                Find Shops
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default FilterRoutes