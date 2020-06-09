import Link from 'next/link';
import ReadMoreAndLess from "../components/ReadMore";
import Ic_Location from "../src/Ic_Location";

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
                {/* TO-DO: adplist tag here*/}
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
            
            {/* TO-DO: social links here*/}
        </div>
    </>
  );
}

export default MakerCard