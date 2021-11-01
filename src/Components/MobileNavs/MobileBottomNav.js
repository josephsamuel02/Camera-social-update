import './MobileBottomNav.css'
import{ MdHome, MdAddCircleOutline, MdNotificationsActive } from "react-icons/md"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";



const MobileBottomNav = () => {


    return ( <div className="bottomnav">

        <IconContext.Provider value={{
            color: "dodgerblue",
            size: "28px"
        }}>

            <div className="bottomicons">
                   <h1 className="icons"><Link to='/homePage'><MdHome/></Link></h1>
                   <h1 className="icons"><Link to='/addpost'><MdAddCircleOutline/></Link></h1>
                   <h1 className="icons"><Link to='/notifications'><MdNotificationsActive/></Link></h1>
            </div>


        </IconContext.Provider>
        
    </div> );
}
 
export default MobileBottomNav;