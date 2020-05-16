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
              <div key={index} className="flex pb-1">
                <label className="flex justify-start items-start">
                <div className="checkboxframe mr-2 mt-1 justify-center items-center">
                  <input
                    type="checkbox"
                    className="opacity-0 absolute"
                    index={index}
                    onChange={() => onChange(expertise.expertise)}
                  />
                <svg className="hidden w-4 h-4" viewBox="0 0 16 16">
                  <rect x="3" y="3" width="10" height="10" fill="black"/>
                </svg>
                </div>
                <div className="md:text-xs">{expertise.expertise}</div>
                </label>
              </div>
            ))}
        </div>
    </div>
);

export default FilterList;
