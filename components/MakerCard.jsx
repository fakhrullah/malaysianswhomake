import Ic_Location from '../src/Ic_Location';
import Ic_Website from '../src/Ic_Website';
import Ic_Instagram from '../src/Ic_Instagram';

const MakerCard = ({ directory }) => {
  return (
    <div className="mb-10">
      <div className="mb-0.75 font-semibold">{directory.name}</div>
      <div className="mb-0.75"><Ic_Location/>{directory.location}</div>
      <div>{directory.biography}</div>
    </div>
  )
}

const MakerList = ({ makerDirectory }) => {
    let makerList = makerDirectory.sort();
    return (
        <div>
          {
            makerList.map( (makerDirectory, index) => (
                <MakerCard key={index} directory={makerDirectory} />
            ))
          }
        </div>
    )
};

export default MakerList;