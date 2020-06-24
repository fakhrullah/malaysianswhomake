import React from "react";
import Layout from "../components/Layout";
import MakerList from "../components/MakerList";
import Typewriter from 'typewriter-effect';

const Tabletop = require("tabletop");

function Home({
  makerDirectory,
  expertiseList
}) {
  return (
    <Layout>
        <div className="container mx-auto px-24 pt-24 md:px-8 md:pt-36 sm:px-8 sm:pt-40">
            <div className="hero-div mb-12 align-middle">
                <div>
                  <h1><span className="textshadow md:text-xl sm:text-l">Discover Malaysian&nbsp;
                  <Typewriter
                    options={{
                      strings: ['Designers', 'Developers', 'Photographers', 'Writers', 'Speakers'],
                      autoStart: true,
                      loop: true,
                    }}
                  /></span>
                  </h1>
                  <div className="w-3/5 pt-4 mx-auto textshadow sm:text-s sm:w-4/5">
                    Support your home country. Join the initiative to 
                    raise awareness for local creators today.
                  </div>
                </div>
            </div>
            <MakerList makerDirectory = {makerDirectory} expertiseList = {expertiseList}/>
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