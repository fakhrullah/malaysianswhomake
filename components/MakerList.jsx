import React from 'react';
import Ic_Location from '../src/Ic_Location';
import Ic_Website from '../src/Ic_Website';
import Ic_Instagram from '../src/Ic_Instagram';
import Ic_Twitter from '../src/Ic_Twitter';

const MakerCard = ({ directory }) => {
  return (
    <div>
      <div className="h-48">
          {directory.image ? <img className="h-full w-full object-cover" src={directory.image} alt="img"/> : null}
      </div>
      <div className="pt-2 pb-0.75 font-semibold">{directory.name}</div>
      <div className="text-s inline align-middle"><Ic_Location/>{directory.location}</div>
      <div className="pt-2 text-s pb-4">{directory.biography}</div>
      <div>
        {directory.website ? <span className="inline mr-2"><a href={directory.website}><Ic_Website/></a></span> : null}
        {directory.instagram ? <span className="inline mr-2"><a href={directory.instagram}><Ic_Instagram/></a></span> : null}
        {directory.twitter ? <span className="inline mr-2"><a href={directory.twitter}><Ic_Twitter/></a></span> : null}
      </div>
    </div>
  )
}

const MakerList = ({ makerDirectory }) => {
    let makerList = makerDirectory.sort();

    return (
        <div className="grid grid-cols-4 gap-8 row-gap-12">
          {
            makerList.map( (makerDirectory, index) => (
                <MakerCard key={index} directory={makerDirectory} />
            ))
          }
        </div>
    )
};

export default MakerList;