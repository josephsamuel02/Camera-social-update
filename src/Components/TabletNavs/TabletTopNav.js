import './TabletTopNav.css'
import{  MdLiveTv, MdWeb} from "react-icons/md"
import { IconContext } from "react-icons";

const TabletTopNav = () => {
    return ( <div className="tablettopnav">
        <IconContext.Provider value={{
            color: "dodgerblue",
            size: "26px",

        }}>
          
            <h1><MdLiveTv/></h1>
            <h1><MdWeb/></h1>




        </IconContext.Provider>
        
    </div> );
}
 
export default TabletTopNav;