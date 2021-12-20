import "./TabletBottomNav.css";
import { MdAddCircleOutline, MdPerson } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const TabletBottomNav = () => {
    return (
        <div className="tabletbottomnav">
            <IconContext.Provider
                value={{
                    color: "dodgerblue",
                    size: "28px",
                }}
            >
                <h1>
                    <Link to="/addpost">
                        <MdAddCircleOutline />
                    </Link>
                </h1>
                <h1>
                    <Link to="/profile">
                        <MdPerson />
                    </Link>
                </h1>
            </IconContext.Provider>
        </div>
    );
};

export default TabletBottomNav;
