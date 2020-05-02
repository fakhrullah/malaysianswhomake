const FilterList = ({ expertiseList, setExpertiseFilter, setPagination }) => {

  let expertiseFilter = expertiseList.sort();
  
    const handleChange = (expertise, index) => {
      let newExpertiseFilter = [...expertiseFilter];
      expertise.selected = !expertise.selected
      newExpertiseFilter[index] = expertise
      setExpertiseFilter(newExpertiseFilter);
      setPagination(0);
    }

    return (
      <div>
        <div className="col-span-1">
          <div className="pb-8">
              <h3 className="pb-4">Expertise</h3>
              {
              expertiseFilter.map( (expertise, index) => (
                <div className="mt-1" key={index}>
                  <label>
                      <input type="checkbox" className="form-checkbox h-4 w-4 mr-2 mb-2" onChange={(e) => handleChange(e, expertise, index)} checked={expertise.selected} />
                      <span>{expertise.expertise}</span>
                  </label>
                </div>
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