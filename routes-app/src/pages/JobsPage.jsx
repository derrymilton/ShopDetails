import React from 'react'
// import jobs from '../jobs.json'
import JobListings from '../components/JobListings';
 
//Jobs page

const JobsPage = () => {
  return (
    <section className="bg-black">
      <JobListings />
    </section>
  );
};

export default JobsPage