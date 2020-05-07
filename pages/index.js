import React from "react";
import Layout from "../components/Layout";
import MakerList from "../components/MakerList";

const Tabletop = require("tabletop");

function Home({
  makerDirectory,
  expertiseList
}) {
  return (
    <Layout>
        <div className="hero pt-20 pb-6 md:pt-3.5 md:pb-4 sm:pt-48">
            <h2>
            A directory dedicated to showcase passionate Malaysian Makers.
            If you'd like to request a feature, <u>let us know</u>.
            </h2> 
        </div>
        <div className="container mx-auto">
            <MakerList makerDirectory = {makerDirectory} 
            expertiseList = {expertiseList}/>
        </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const spreadSheetUrl =
    "https://docs.google.com/spreadsheets/d/19LiipFiwT8-QypTMmCeJy40U15wwHULyeejczx5dUe0/edit?usp=sharing";

  function getData() {
    return new Promise((resolve) => {
      Tabletop.init({
        key: spreadSheetUrl,
        callback: (data) => resolve(data),
        simpleSheet: false,
      });
    });
  }
  const ssData = await getData();
  return {
    props: {
      makerDirectory: ssData.directory.elements,
      expertiseList: ssData.filters.elements,
    },
  };
}

export default Home;