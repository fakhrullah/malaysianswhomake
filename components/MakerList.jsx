import React, { useState } from "react";
import chunk from "lodash/chunk";
import Pagination, { PER_PAGE } from "../components/Pagination";
import MakerCard from "../components/MakerCard";
import FilterList from "../components/Filters";

// sort makers alphabetically
// itemsArray.sort((a,b) => {
//   return a.name > b.name;
// });

function MakerList({ makerDirectory, expertiseList }) {
  const [activeExpertises, setActiveExpertises] = useState([]);

  function onFilterChange(expertise) {
    setActiveExpertises(
      activeExpertises.includes(expertise)
        ? activeExpertises.filter((e) => e !== expertise)
        : activeExpertises.concat(expertise)
    );
    setCurrentPage(0);
  }

  let makerList = makerDirectory
    .filter(
      (maker) =>
        activeExpertises.length === 0 ||
        activeExpertises.includes(maker.expertise) ||
        activeExpertises.includes(maker.position)
    )
    .sort((a,b) => {return a.name > b.name;});
    
  console.log(makerList);

  const [currentPage, setCurrentPage] = useState(0);
  let makersToShow = chunk(makerList, PER_PAGE)[currentPage] || [];

  return (
    <div className="inline-grid grid-cols-4 gap-10 pb-16 md:grid-cols-3 md:gap-4 sm:flex">
      <div className="col-span-1 md:col-span-1 sm:hidden">
        <FilterList onChange={onFilterChange} expertiseList={expertiseList} />
      </div>
      {/* 
        <div className="fabfilter">
          <button>Filter by</button>
        </div> 
      */}
      <div className="flex-row col-span-3 md:col-span-2 sm:flex-col sm:w-full">
        <div className="grid grid-cols-3 gap-8 row-gap-12 md:grid-cols-2 sm:grid-cols-1">
          {makersToShow.map((directory, index) => (
            <MakerCard key={index} directory={directory} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          makerDirectory={makerList}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default MakerList;
