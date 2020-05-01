import Ic_Location from '../src/Ic_Location';
import Ic_Website from '../src/Ic_Website';
import Ic_Instagram from '../src/Ic_Instagram';

const MakerCard = ({ directory }) => {
  return (
    <div>
      <div className="pb-0.75 font-semibold">{directory.name}</div>
      <div className="text-s inline align-middle"><Ic_Location/>{directory.location}</div>
      <div className="pt-2 text-s">{directory.biography}</div>
      <div className="pt-2"><Ic_Website/>        <Ic_Instagram/></div>
    </div>
  )
}

const MakerList = ({ makerDirectory }) => {
    let makerList = makerDirectory.sort();
    return (
        <div className="grid grid-cols-4 gap-8 row-gap-8">
          {
            makerList.map( (makerDirectory, index) => (
                <MakerCard key={index} directory={makerDirectory} />
            ))
          }
        </div>
    )
};

export default MakerList;