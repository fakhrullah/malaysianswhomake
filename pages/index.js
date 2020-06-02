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
        <div className="container mx-auto px-24 pt-32 md:px-8 md:pt-36 sm:px-8 sm:pt-40">
            Hello
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