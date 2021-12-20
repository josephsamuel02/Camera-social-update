import "./DesktopRightNav.css";
import { Link } from "react-router-dom";
import { MdPerson, MdAdd } from "react-icons/md";
import { IconContext } from "react-icons";

const DesktopRightNav = () => {
    return (
        <div className="desktoprightnav">
            <IconContext.Provider
                value={{
                    color: "dodgerblue",
                    size: "20",
                }}
            >
                <div id="myinfo">
                    <div id="userimg">
                        <img src="photos/microphone boy.jpg" alt="" />
                    </div>
                    <Link to="/profile">
                        <h1 id="profilelink">
                            <MdPerson />
                            <span> Profile</span>
                        </h1>
                    </Link>
                    <Link to="/addpost">
                        <h1 id="profilelink">
                            <MdAdd />
                            <span>Add Post</span>
                        </h1>
                    </Link>
                </div>

                <div id="dsk_rightnav_timeline">
                    <div className="dsk_timline_card">
                        <div className="poster_info">
                            <img
                                src="./photos/people-3104635_1920.jpg"
                                alt=""
                            />
                            <span className="poster_nam">Alabi ajohnson</span>
                        </div>
                        <img src="./photos/confrence.jpg" alt="" />
                        <div className="card_text">
                            <span>
                                laurem ipsum dolor sit amet laurem ipsum dolor
                                sit ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit ametlaurem ipsum dolor sit amet!
                                ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit amet!
                            </span>
                        </div>
                    </div>

                    <div className="dsk_timline_card">
                        <div className="poster_info">
                            <img src="./photos/microphone boy.jpg" alt="" />
                            <span className="poster_nam">Alabi ajohnson</span>
                        </div>
                        <img src="./photos/laptop-336378_1920.jpg" alt="" />
                        <div className="card_text">
                            <span>
                                laurem ipsum dolor sit amet laurem ipsum dolor
                                sit ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit ametlaurem ipsum dolor sit amet!
                                ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit amet!
                            </span>
                        </div>
                    </div>

                    <div className="dsk_timline_card">
                        <div className="poster_info">
                            <img src="./photos/Cake.jpg" alt="" />
                            <span className="poster_nam">Alabi ajohnson</span>
                        </div>
                        <img src="./photos/temple.jpg" alt="" />
                        <div className="card_text">
                            <span>
                                laurem ipsum dolor sit amet laurem ipsum dolor
                                sit ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit ametlaurem ipsum dolor sit amet!
                                ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit amet!
                            </span>
                        </div>
                    </div>

                    <div className="dsk_timline_card">
                        <div className="poster_info">
                            <img src="./photos/Cake.jpg" alt="" />
                            <span className="poster_nam">Alabi ajohnson</span>
                        </div>
                        <img src="./photos/woman-332278_1920.jpg" alt="" />
                        <div className="card_text">
                            <span>
                                laurem ipsum dolor sit amet laurem ipsum dolor
                                sit ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit ametlaurem ipsum dolor sit amet!
                                ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit amet!
                            </span>
                        </div>
                    </div>

                    <div className="dsk_timline_card">
                        <div className="poster_info">
                            <img src="./photos/Cake.jpg" alt="" />
                            <span className="poster_nam">Alabi ajohnson</span>
                        </div>
                        <img src="./photos/confrence.jpg" alt="" />
                        <div className="card_text">
                            <span>
                                laurem ipsum dolor sit amet laurem ipsum dolor
                                sit ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit ametlaurem ipsum dolor sit amet!
                                ametlaurem ipsum dolor sit ametlaurem ipsum
                                dolor sit amet!
                            </span>
                        </div>
                    </div>

                    <br />
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default DesktopRightNav;
