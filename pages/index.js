import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import MakerList from '../components/MakerList'

const Tabletop = require('tabletop');

function Home(props) {
  let { makerDirectory, expertiseList } = props;
  const router = useRouter()
  const { e } = router.query

  //Define the initial expertise and its states
  let expertiseListInitialState = []
  expertiseList.map(e => {
      let expertise = {
          selected: true,
          index: e.index,
          expertise: e.expertise
      }
      expertiseListInitialState.push(expertise)
  })
  
  //If there's a expertise selected, put the initial expertise state as only that one true and the rest false.
  if (e) {
    expertiseListInitialState = expertiseListInitialState.map(initialE => {
          if (initialE.expertise !== e) {
              return (
                  {
                      selected: !initialE.selected,
                      index: initialE.index,
                      expertise: initialE.expertise
                  }
              )
          } else {
              return (
                  initialE
              )
          }
      })
  }

  //Filter by Expertise
  const [expertiseFilter, setExpertiseFilter] = useState(expertiseListInitialState);

  let selectedExpertise = expertiseFilter.filter(expertise => expertise.selected === true).map(expertise => expertise.expertise);
  makerDirectory = makerDirectory.filter(directory => {
      return selectedExpertise.includes(directory.expertise)
  })  

  //Pagination
  const listingsPerPage = 12;
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
        <div>
            <MakerList makerDirectory={makerDirectory} expertiseList={props.expertiseList} expertiseFilter={expertiseFilter} setExpertiseFilter={setExpertiseFilter} pagination={pagination} setPagination={setPagination} numberOfPages={numberOfPages}/>
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
      expertiseList: ssData.filters.elements
    }
  };
}

export default Home