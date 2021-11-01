import "./DesktopTopNav.css";
import { IconContext } from 'react-icons';
import { MdHome, MdLiveTv,  MdWeb, } from 'react-icons/md'


const DeskttopTopNav = () => {
    return ( <nav className="desktoptopnav">
        <IconContext.Provider value={{
            color: "dodgerblue",
            size: "28px",

        }}>

            <h1 className="dsk_topicon"><MdHome /></h1>
            <h1 className="dsk_topicon"><MdLiveTv /></h1>
            <h1 className="dsk_topicon"><MdWeb /></h1>

            
            </IconContext.Provider>  

    </nav> );
}
 
export default DeskttopTopNav;