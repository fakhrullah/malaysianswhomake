import React, { useState } from "react";
import chunk from "lodash/chunk";
import Pagination, { PER_PAGE } from "../components/Pagination";
import MakerCard from "../components/MakerCard";
import FilterList from "../components/Filters";

function MakerList({ makerDirectory, expertiseList }) {
  const [activeExpertise, setActiveExpertise] = useState("");

  function onChange(expertise) {
    setActiveExpertise(expertise);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  let makerList = makerDirectory
    .filter(
      (maker) =>
        activeExpertise.length === 0 || maker.expertise === activeExpertise
    )
    .sort();

  let makersToShow = chunk(makerList, PER_PAGE)[currentPage - 1] || [];

  return (
    <div className="grid grid-cols-5 gap-8 pl-12 pr-12 pt-10">
      <div>
        <FilterList onChange={onChange} expertiseList={expertiseList} />
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-4 gap-8 row-gap-12">
          {makersToShow.map((directory, index) => (
            <MakerCard key={index} directory={directory} />
          ))}
        </div>
        <Pagination makerDirectory={makerList} onChange={onPageChange} />
      </div>
    </div>
  );
}

export default MakerList;
