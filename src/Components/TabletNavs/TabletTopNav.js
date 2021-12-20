import "./TabletTopNav.css";
import { MdLiveTv, MdWeb } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const TabletTopNav = () => {
    return (
        <div className="tablettopnav">
            <IconContext.Provider
                value={{
                    color: "dodgerblue",
                    size: "26px",
                }}
            >
                <h1>
                    <Link to="/videos">
                        <MdLiveTv />
                    </Link>
                </h1>
                <h1>
                    <Link to="/news">
                        <MdWeb />
                    </Link>
                </h1>
            </IconContext.Provider>
        </div>
    );
};

export default TabletTopNav;
