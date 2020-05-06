import React, { useState } from "react";
import chunk from "lodash/chunk";
import Pagination, { PER_PAGE } from "../components/Pagination";
import MakerCard from "../components/MakerCard";
import FilterList from "../components/Filters";

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
    .sort();

  const [currentPage, setCurrentPage] = useState(0);
  let makersToShow = chunk(makerList, PER_PAGE)[currentPage] || [];

  return (
    <div className="grid grid-cols-5 gap-8 pl-12 pr-12 pt-10">
      <div>
        <FilterList onChange={onFilterChange} expertiseList={expertiseList} />
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-4 gap-8 row-gap-12">
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
