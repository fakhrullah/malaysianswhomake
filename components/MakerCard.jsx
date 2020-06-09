import Link from 'next/link'
import ReadMoreAndLess from "./ReadMore"
import Ic_Location from "../src/Ic_Location"
import Ic_Website from "../src/Ic_Website"
import Ic_Briefcase from "../src/Ic_Briefcase"
import Ic_Instagram from "../src/Ic_Instagram"
import Ic_Twitter from "../src/Ic_Twitter"
import Ic_LinkedIn from "../src/Ic_LinkedIn"
import Ic_Behance from "../src/Ic_Behance"
import Ic_Dribbble from "../src/Ic_Dribbble"
import Ic_Github from "../src/Ic_Github"
import Ic_Medium from "../src/Ic_Medium"
import Ic_AdplistTag from "../src/Ic_AdplistTag"

const dummyPicture = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-user'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E"

const MakerCard = ({ user }) => {

  return (
    <>
        <div key={user._id} className="max-w-14 sm:max-w-48">

            <div className="h-full relative">
                <Link href="/[userId]" as={`/${user.username}`}><a>
                <img width="27" height="27" 
                        src={user.profilePicture || dummyPicture} alt={user.name} 
                        className="w-full h-imglg md:h-imgmd sm:h-imgsm object-cover makerImage"
                />
                {user.tag === "adplist" ? (<a className="makerTag" href="https://adplist.org/" 
                target="_blank"><Ic_AdplistTag/></a>) : null}
                <div className="capitalize pt-2 pb-0.75 font-semibold md:text-s sm:text-24">{user.name}</div>
                </a></Link>
            </div>

            <div className="text-s md:text-xs sm:text-l inline align-middle location-icon">
                <Ic_Location/> {user.location}
            </div>

            <div className="text-s md:text-xs sm:text-l pt-2 pb-4">
                <ReadMoreAndLess>
                {user.bio || ''}
                </ReadMoreAndLess>
            </div>
            
            <div>
                {user.link_website ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_website} target="_blank"><Ic_Website/></a>
                </span> ) : null}
                {user.link_instagram ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_instagram} target="_blank"><Ic_Instagram /></a>
                </span> ) : null}
                {user.link_twitter ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_twitter} target="_blank"><Ic_Twitter /></a>
                </span> ) : null}
                {user.link_linkedin ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_linkedin} target="_blank"><Ic_LinkedIn /></a>
                </span> ) : null}
                {user.link_portfolio ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_portfolio} target="_blank"><Ic_Briefcase/></a>
                </span> ) : null}
                {user.link_github ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_github} target="_blank"><Ic_Github/></a>
                </span> ) : null}
                {user.link_behance ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_behance} target="_blank"><Ic_Behance/></a>
                </span> ) : null}
                {user.link_medium ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_medium} target="_blank"><Ic_Medium/></a>
                </span> ) : null}
                {user.link_dribbble ? (
                <span className="social-icon mr-3 sm:mr-6">
                    <a href={user.link_dribbble} target="_blank"><Ic_Dribbble/></a>
                </span> ) : null}
            </div>
        </div>
    </>
  );
}

export default MakerCard