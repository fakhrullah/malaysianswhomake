import React from "react";
// import ReadMoreAndLess from 'react-read-more-less';
import ReadMoreAndLess from "../components/ReadMore";
import Ic_Location from "../src/Ic_Location";
import Ic_Website from "../src/Ic_Website";
import Ic_Briefcase from "../src/Ic_Briefcase";
import Ic_Instagram from "../src/Ic_Instagram";
import Ic_Twitter from "../src/Ic_Twitter";
import Ic_LinkedIn from "../src/Ic_LinkedIn";

const MakerCard = ({ directory }) => {
  return (
    <div className="max-w-14 sm:max-w-48">

      <div className="h-full">
        {directory.image ? (
          <img
            className="w-full h-imglg md:h-imgmd sm:h-imgsm object-cover makerImage"
            src={directory.image}
            alt="img"
          />
        ) : null}
      </div>

      <div className="pt-2 pb-0.75 font-semibold md:text-s sm:text-24">
        {directory.name}
      </div>

      <div className="text-s md:text-xs sm:text-l inline align-middle location-icon">
        <Ic_Location/> {directory.location}
      </div>

      <div className="text-s md:text-xs sm:text-l pt-2 pb-4">
        <ReadMoreAndLess>
            {directory.biography}
        </ReadMoreAndLess>
      </div>

      <div>
        {directory.website ? (
          <span className="inline mr-3 sm:mr-6 social-icon">
            <a href={directory.website} target="_blank">
              <Ic_Website/>
            </a>
          </span>
        ) : null}
        {directory.instagram ? (
          <span className="inline mr-3 sm:mr-6 social-icon">
            <a href={directory.instagram} target="_blank">
              <Ic_Instagram />
            </a>
          </span>
        ) : null}
        {directory.twitter ? (
          <span className="inline mr-3 sm:mr-6 social-icon">
            <a href={directory.twitter} target="_blank">
              <Ic_Twitter />
            </a>
          </span>
        ) : null}
        {directory.linkedin ? (
          <span className="inline mr-3 sm:mr-6 social-icon">
            <a href={directory.linkedin} target="_blank">
              <Ic_LinkedIn />
            </a>
          </span>
        ) : null}
        {directory.website2 ? (
          <span className="inline mr-3 sm:mr-6 social-icon">
            <a href={directory.website2} target="_blank">
              <Ic_Briefcase/>
            </a>
          </span>
        ) : null}
      </div>

    </div>
  );
};

export default MakerCard;
