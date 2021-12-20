import "./DesktopTopNav.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { MdHome, MdLiveTv, MdWeb } from "react-icons/md";

const DeskttopTopNav = () => {
    return (
        <nav className="desktoptopnav">
            <IconContext.Provider
                value={{
                    color: "dodgerblue",
                    size: "28px",
                }}
            >
                <h1 className="dsk_topicon">
                    <Link to="/">
                        <MdHome />
                    </Link>
                </h1>
                <h1 className="dsk_topicon">
                    <Link to="/videos">
                        <MdLiveTv />
                    </Link>
                </h1>
                <h1 className="dsk_topicon">
                    <Link to="/news">
                        <MdWeb />
                    </Link>
                </h1>
            </IconContext.Provider>
        </nav>
    );
};

export default DeskttopTopNav;
