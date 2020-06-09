import React, { useState } from "react";
import chunk from "lodash/chunk";
import Pagination, { PER_PAGE } from "./Pagination";
import MakerCard from "./MakerCard2"
import FilterList from "./FilterList"
import expList from '../lib/expertises.json'

const MakerList = ({ allUsers }) => {

  const [activeExpertises, setActiveExpertises] = useState([]);
  function onFilterChange(index) {
    setActiveExpertises(activeExpertises.includes(index)
        ? activeExpertises.filter( e => e !== index)
        : activeExpertises.concat(index)
    );
    setCurrentPage(0);
  }

  let makerList = allUsers.filter( u => activeExpertises.length === 0 ||
                  u.expertises.length > 0 && u.expertises.find( e => 
                  activeExpertises.includes(e) ) ) //Thanks VINZ!

  const [currentPage, setCurrentPage] = useState(0);
  let makersToShow = chunk(makerList, PER_PAGE)[currentPage] || [];

  return (
    <>
      <div className="inline-grid grid-cols-4 gap-10 pb-16 md:grid-cols-3 md:gap-4 sm:flex">

        <div className="col-span-1 md:col-span-1 sm:hidden">
          <FilterList onChange={onFilterChange} expList={expList}/>
        </div>
        
        <div className="flex-row col-span-3 md:col-span-2 sm:flex-col sm:w-full">
          <div className="grid grid-cols-3 gap-8 row-gap-12 md:grid-cols-2 sm:grid-cols-1">
            {makersToShow.map( (user, index) => (
              <div key={user._id} className="max-w-14 sm:max-w-48">
                  <MakerCard key={index} user={user}/>
              </div>
            ))}
          </div>
          <Pagination
              currentPage={currentPage}
              makerDirectory={makerList}
              onChange={setCurrentPage}
          /> 
        </div>

      </div>
    </>
  );
}

export default MakerList