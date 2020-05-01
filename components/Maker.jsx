const Smth = ({ directory }) => {
  return (
    <div>
      {directory.name} | {directory.category}
    </div>
  )
}

const MakerList = ({ makerName }) => {
    let makerList = makerName.sort();
    return (
        <div>
          {
            makerList.map( (makerName, index) => (
                <Smth key={index} directory={makerName} />
            ))
          }
        </div>
    )
};

export default MakerList;