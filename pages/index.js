import React from "react"
import Layout from "../components/Layout"
import MakerList2 from "../components/MakerList2"
import FilterList2 from "../components/FilterList2"
// import Pagination from "../components/Pagination"

function Home({onFilterChange, expertiseList }) {
  return (
    <Layout>
        <div className="container mx-auto px-24 pt-32 md:px-8 md:pt-36 sm:px-8 sm:pt-40">
          
          <div className="w-full text-center py-4">
            Discover talented, passionate Malaysians who always strive to create and build stuff.<br/>
            Want to be part of this? Submit your info in 30 secs.
          </div>
          
          <div className="inline-grid grid-cols-4 gap-10 pb-16 md:grid-cols-3 md:gap-4 sm:flex">
            <div className="col-span-1 md:col-span-1 sm:hidden">
              <FilterList2 />
              {/* <FilterList onChange={onFilterChange} expertiseList={expertiseList} /> */}
            </div>
            <div className="flex-row col-span-3 md:col-span-2 sm:flex-col sm:w-full">
              <MakerList2 />
              {/* <Pagination
                  currentPage={currentPage}
                  makerDirectory={makerList}
                  onChange={setCurrentPage}
              />  */}
            </div>
          </div>

        </div>
    </Layout>
  );
}

export default Home;