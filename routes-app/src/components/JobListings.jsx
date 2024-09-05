import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import jobs from '../jobs.json'
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = () => {
  const location = useLocation();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  //Receives the filtered data via location.state
  const filteredValues = location.state?.filteredValues || [];

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL =  "/api/jobs";
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();

  }, []);
  //filtering data based on user requirement
  const filtered =
    Object.keys(filteredValues).length === 0
      ?jobs
      : jobs.filter(
          (job) =>
            (!filteredValues.routeNo ||
              String(job.routeNo).includes(filteredValues.routeNo)) &&
            (!filteredValues.day || job.day.includes(filteredValues.day))
        );
  
  //reset CheckBoxes
  const resetCheckBoxes = async (completionStatus) => {
    console.log(completionStatus)
    const res = await fetch("/api/jobs", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...jobs, completionStatus:false }),
    });
    return;
  };

  return (
    <section className="bg-black ">
      <div className="container-xl lg:container m-auto py-2 ">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 flex items-center justify-center">
          All Shop Details
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {filtered.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
