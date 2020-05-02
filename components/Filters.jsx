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

const FilterList = ({ expertiseList }) => {
    let filterList = expertiseList.sort();
    return (
      <div>
        <div className="col-span-1">
          <div className="pb-8">
              <h3 className="pb-4">Expertise</h3>
              {
              filterList.map( (expertiseList, index) => (
                  <FilterCard key={index} filters={expertiseList} />
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