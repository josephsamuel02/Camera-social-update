import './MobileTopNav.css';
import { MdForum, MdPeople, MdLiveTv, MdPerson, MdSearch, MdWeb, } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";


const MobileTopNav = () => {
    return ( <div className="topNav">
        <IconContext.Provider value={{
            color: "dodgerblue",
            size: "22px",
        }}>
            <Link to='/homepage'><span id="logo">Camera</span></Link>
            <span id="serchicon"><MdSearch /></span>


            <div className="topicons">

                <h1 className="icons"><Link to='/messages'><MdForum /></Link></h1>
                <h1 className="icons"><Link to='/news'><MdWeb /></Link></h1>
                <h1 className="icons"><Link to='/videos'><MdLiveTv /></Link></h1>
                <h1 className="icons"><Link to='/friends'><MdPeople /></Link></h1>
                <h1 className="icons"><Link to='/profile'><MdPerson /></Link></h1>

        </div>

        </IconContext.Provider >
    </div> );
}
 
export default MobileTopNav;