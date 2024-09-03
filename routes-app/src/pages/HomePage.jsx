import React from 'react'
import Header from '../components/Header'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import FilterRoutes from '../components/FilterRoutes'

const HomePage = ({routesData}) => {

  return (
    <>
      <Header />
      <HomeCards routesData={routesData}/>
      <FilterRoutes />
      {/* <JobListings isHome={true} />
      <ViewAllJobs /> */}
    </>
  )
}

export default HomePage