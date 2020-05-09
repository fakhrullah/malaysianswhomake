import React from "react";

const FilterList = ({ expertiseList, onChange = () => {} }) => (
    <div className="sticky top-8 h-screen overflow-y-scroll pb-10 md:top-11">

        <div className="font-semibold leading-5 pb-8">
        Discover talented, passionate Malaysians who always strive 
        to create and build stuff.
        </div>

        <div className="pb-6">
          <h3 className="pb-2">Expertise</h3>
          {expertiseList
            .filter((expertise) => expertise.type === "exp")
            .map((expertise, index) => (
              <div key={index} className="pb-1">
                <label>
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 mr-2"
                    index={index}
                    onChange={() => onChange(expertise.expertise)}
                  />
                  <span className="md:text-xs">{expertise.expertise}</span>
                </label>
              </div>
            ))}
        </div>
        {/* <div>
          <h3 className="pb-2">Position</h3>
          {expertiseList
            .filter((expertise) => expertise.type === "pos")
            .map((expertise, index) => (
              <div key={index} className="pb-1">
                <label>
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 mr-2"
                    index={index}
                    onChange={() => onChange(expertise.expertise)}
                  />
                  <span className="md:text-xs">{expertise.expertise}</span>
                </label>
              </div>
            ))}
        </div> */}
    </div>
);

export default FilterList;
