import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const openGoogleMaps = (shopAddress) => {
    const query = encodeURIComponent(shopAddress);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, "_blank");
  };
  return (
    <div
      className={`rounded-xl shadow-md relative ${
        job.completionStatus ? "bg-white" : "bg-red-100"
      }`}
    >
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold">{job.name}</h3>

          <Link
            to={`/jobs/${job.id}`}
            className="text-indigo-500 mb-6 hover:text-indigo-600"
          >
            Full Details
          </Link>
        </div>
        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <button
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            onClick={() => openGoogleMaps(job.shopAddress)}
            style={{ cursor: "pointer" }}
          >
            Get directions
          </button>
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
