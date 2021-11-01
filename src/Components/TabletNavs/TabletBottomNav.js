import './TabletBottomNav.css'
import{  MdAddCircleOutline, MdPerson} from "react-icons/md"
import { IconContext } from "react-icons";

const TabletBottomNav = () => {
    return ( <div className="tabletbottomnav">
        <IconContext.Provider value={{
            color: "dodgerblue",
            size: "28px",

        }}>
          
            <h1><MdAddCircleOutline/></h1>
            <h1><MdPerson/></h1>




        </IconContext.Provider>
        
    </div> );
}
 
export default TabletBottomNav;