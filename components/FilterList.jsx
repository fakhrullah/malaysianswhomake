const FilterCard = ({ filters }) => {
    return (
      <div>
        <label>
            <input type="checkbox" className="form-checkbox h-4 w-4 mr-2 mb-2"></input> 
            <span>{filters.expertise}</span>
        </label>
      </div>
    )
  }
  