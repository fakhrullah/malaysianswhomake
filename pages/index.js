import Layout from '../components/Layout'
import MakerList from '../components/MakerCard'

const Tabletop = require('tabletop');

function Home(props) {
  let { makerDirectory } = props;
  return (
    <Layout>
      <div className="hero">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Duis ut diam quam nulla porttitor massa. Senectus et netus et malesuada 
          fames ac turpis egestas.
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-1"><MakerList makerDirectory={makerDirectory} /></div>
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
      makerExpertise: ssData.expertise.elements
    }
  };
}

export default Home