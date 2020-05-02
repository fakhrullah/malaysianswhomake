import React from 'react';
import Pagination from '../components/Pagination';
import MakerCard from '../components/MakerCard';
import FilterList from '../components/Filters';

function MakerList({ makerDirectory, expertiseList, expertiseFilter, setExpertiseFilter, numberOfPages, pagination, setPagination }) {
    let makerList = makerDirectory.sort();

    return (
      <div className="grid grid-cols-5 gap-8 pl-12 pr-12 pt-10">
          <div>
              <FilterList expertiseList={expertiseList} expertiseFilter={expertiseFilter} setExpertiseFilter={setExpertiseFilter} setPagination={setPagination}/>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-8 row-gap-12">
              {
                makerList.map( (directory, index) => (
                    <MakerCard key={index} directory={directory} />
                ))
              }
            </div>
            <Pagination numberOfPages={numberOfPages} setPagination={setPagination} pagination={pagination} />
          </div>
      </div>
    )
};

export default MakerList;