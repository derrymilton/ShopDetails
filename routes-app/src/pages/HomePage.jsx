import React from 'react'
import Header from '../components/Header'
import HomeCards from '../components/HomeCards'
import FilterRoutes from '../components/FilterRoutes'

const HomePage = ({routesData}) => {

  return (
    <>
      <Header />
      <HomeCards routesData={routesData}/>
      <FilterRoutes />
    </>
  )
}

export default HomePage