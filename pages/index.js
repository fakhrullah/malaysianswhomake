import Layout from '../components/Layout'
import MakerList from '../components/Maker'

const Tabletop = require('tabletop');

function Home(props) {
  let { makerName } = props;
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
        <MakerList makerName={makerName} />
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
      makerName: ssData.directory.elements
    }
  };
}

export default Home