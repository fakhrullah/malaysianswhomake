const FilterCard = ({ filters }) => {
    return (
      <div>
        <div>
            <label>
                <input type="checkbox" className="form-checkbox h-4 w-4 mr-2 mb-2"></input> 
                    {filters.expertise}
            </label>
        </div>
      </div>
    )
  }
  
  const FilterList = ({ makerExpertise }) => {
      let filterList = makerExpertise.sort();
      return (
        <div>
          <div className="col-span-1">
            <div className="pb-8">
                <h3 className="pb-4">Expertise</h3>
                {
                filterList.map( (makerExpertise, index) => (
                    <FilterCard key={index} filters={makerExpertise} />
                ))
                }
            </div>
            <div className="pb-8">
                <h3 className="pb-4">Position</h3>
            </div>
            <div className="pb-8">
                <h3 className="pb-4">Location</h3>
            </div>
          </div>
        </div>
      )
  };
  
  export default FilterList;