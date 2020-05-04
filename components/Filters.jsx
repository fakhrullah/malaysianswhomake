import React, { useState } from "react";

const FilterList = ({ expertiseList, onChange }) => {
  const [activeExpertise, setActiveExpertise] = useState("");

  const handleChange = (expertise) => {
    setActiveExpertise(expertise);
    onChange(expertise);
    console.log(expertise);
  };

  return (
    <div>
      <div className="col-span-1">
        <div className="pb-8">
          <h3 className="pb-4">Expertise</h3>
          {expertiseList.map((expertise, index) => (
            <div className="mt-1" key={index}>
              <label>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 mr-2 mb-2"
                  onChange={(e) => handleChange(expertise.expertise)}
                  checked={expertise.expertise === activeExpertise}
                />
                <span>{expertise.expertise}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="pb-8">
          <h3 className="pb-4">Position</h3>
        </div>
        <div className="pb-8">
          <h3 className="pb-4">Location</h3>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
