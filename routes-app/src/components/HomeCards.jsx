import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
const HomeCards = ({routesData}) => {

  const totalCount=routesData.length;
  const completedCount=routesData.filter((item)=>item.completionStatus==true).length;
   const pendingCount = routesData.filter(
     (item) => item.completionStatus == false
   ).length;


  return (
    <section className="py-4">
      <div className="container-l lg:container m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">
              Total Jobs
              <span className=" inline-flex float-end bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                {totalCount}
              </span>
            </h2>

            {/* <h2 className="text-2xl font-bold">Total Jobs</h2>
            <div className=" inline-flex bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              {length}
            </div> */}
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">
              Currently Open
              <span className=" inline-flex float-end bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                {completedCount}
              </span>
            </h2>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">
              Closed
              <span className=" inline-flex float-end bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                {pendingCount}
              </span>
            </h2>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HomeCards