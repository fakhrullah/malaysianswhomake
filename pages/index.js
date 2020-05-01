import React, { useState } from 'react';
import Layout from '../components/Layout'
import MakerList from '../components/MakerList'
import FilterList from '../components/Filters'
import Pagination from '../components/Pagination';

const Tabletop = require('tabletop');
const listingsPerPage = 12;

function Home(props) {
  let { makerDirectory, makerExpertise } = props;

  //Pagination
  const numberOfListings = makerDirectory.length;
  const [pagination, setPagination] = useState(0);
  let numberOfPages = Math.ceil(numberOfListings / listingsPerPage);
  let firstProject = (((pagination + 1) * listingsPerPage) - listingsPerPage);
  let lastProject = (pagination + 1) * listingsPerPage;
  makerDirectory = makerDirectory.slice(firstProject, lastProject)

  return (
    <Layout>

    <div className="hero">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Duis ut diam quam nulla porttitor massa. Senectus et netus et malesuada 
          fames ac turpis egestas.
        </h2>
    </div>

      <div className="grid grid-cols-5 gap-8 pl-12 pr-12 pt-10">
        <FilterList makerExpertise={makerExpertise}/>
        <div className="col-span-4">
          <MakerList makerDirectory={makerDirectory} />
          <Pagination numberOfPages={numberOfPages} setPagination={setPagination} pagination={pagination} />
        </div>
      </div>
    </Layout> 
  )
}

export async function getServerSideProps() {
  const spreadSheetUrl = "https://docs.google.com/spreadsheets/d/19LiipFiwT8-QypTMmCeJy40U15wwHULyeejczx5dUe0/edit?usp=sharing";
  function getData() {
    return new Promise(resolve => {
      Tabletop.init({
        key: spreadSheetUrl,
        callback: data => resolve(data),
        simpleSheet: false
      });
    });
  }
  const ssData = await getData();
  return {
    props: {
      makerDirectory: ssData.directory.elements,
      makerExpertise: ssData.filters.elements
    }
  };
}

export default Home