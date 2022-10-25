 import './NewsPage.css';
 import { MdForum, MdShare, MdStarHalf } from "react-icons/md";
 import { BsStarHalf } from "react-icons/bs";

import { IconContext } from "react-icons";

const NewsPage = () => {
    return ( <div className="newspage">
                <IconContext.Provider value={{
            size: '18',
            color: 'blue',

        }}>


    <br /><br /><br /><br />

        <div className="news_box">
                <button className="company_name">
                    The Watcher
                </button>
                <div className="image_card">
                    <img src="./photos/Dear.jpg" alt="" />
                </div>

                <h1 className="headline">
                Breaking News: FGN Talks About Reimplementing Subcidy
                </h1>
                <div className="sub_headline">
                    <p> laurem ipsum dolor sit ipsum dolor sit amet!
                        ametlaurem ipsum dolor sit ametlaurem ipsum 
                        dolor sit amet!</p>
                </div>
                <h2 className="reads_and_time">
                    <span>678 M Reads</span>
                    <span>1hr ago</span>
                    <span><button className="read_btn">Read</button></span>
                </h2>
                <div className="trends">
                    <h1><BsStarHalf /><span>3m comends</span></h1>
                    <h1><MdForum /><span>2.5k comments</span></h1>
                    <h1><MdShare/><span>share</span> </h1>
                </div>

            
        </div>

        
        
        <div className="news_box">
                <button className="company_name">
                    The Narrator
                </button>
                <div className="image_card">
                    <img src="./photos/people-3104635_1920.jpg" alt="" />
                </div>

                <h1 className="headline">
                Breaking News: FGN Talks About Reimplementing Subcidy
                </h1>
                <div className="sub_headline">
                    <p> laurem ipsum dolor sit ipsum dolor sit amet!
                        ametlaurem ipsum dolor sit ametlaurem ipsum 
                        dolor sit amet!</p>
                </div>
                <h2 className="reads_and_time">
                    <span>678 M Reads</span>
                    <span>1hr ago</span>
                    <span><button className="read_btn">Read</button></span>
                </h2>
                <div className="trends">
                    <h1><BsStarHalf /><span>3m comends</span></h1>
                    <h1><MdForum /><span>2.5k comments</span></h1>
                    <h1><MdShare/><span>Share</span> </h1>
                </div>


            
        </div>
        
        <div className="news_box">
                <button className="company_name">
                    The Mirror
                </button>
                <div className="image_card">
                    <img src="./photos/pexels-andrea-piacquadio-3823487_1607862686977.jpg" alt="" />
                </div>

                <h1 className="headline">
                Breaking News: FGN Talks About Reimplementing Subcidy
                </h1>
                <div className="sub_headline">
                    <p> laurem ipsum dolor sit ipsum dolor sit amet!
                        ametlaurem ipsum dolor sit ametlaurem ipsum 
                        dolor sit amet!</p>
                </div>
                <h2 className="reads_and_time">
                    <span>678 M Reads</span>
                    <span>1hr ago</span>
                    <span><button className="read_btn">Read</button></span>
                </h2>
                <div className="trends">
                    <h1><BsStarHalf /><span>3m comends</span></h1>
                    <h1><MdForum /><span>2.5k comments</span></h1>
                    <h1><MdShare/><span>Share</span> </h1>
                </div>


            
        </div>

        {/* <input type="search" name="Anu" id="" /> */}

        <div className="mini_news_box">
            <div className="mini_news_img_box">
                <img src="./photos/Cake.jpg" alt="" />
            </div>

            <div className="mini_news_contens">


            <div className="mini_new_headline">
                <h3> See what is trending on social media today:
                     Super eagles tops the list suprisingly
                </h3>
            </div>

            <div className="mininews_time_read">
                            <span>2hr</span>
                            <span className="blog_name">Soya Blog</span>
                            <button>Read</button>
            </div>
                        
            <div className="mini_news_actions">
                            <div><MdStarHalf/><span> 4.3m commends </span> </div>
                            <div><MdShare/><span> share </span></div>
            </div>


            </div>

        </div>
        
        <div className="news_box">
                <button className="company_name">
                    Daily Mile
                </button>
                <div className="image_card">
                    <img src="./photos/Cake.jpg" alt="" />
                </div>

                <h1 className="headline">
                Breaking News: FGN Talks About Reimplementing Subcidy
                </h1>
                <div className="sub_headline">
                    <p> laurem ipsum dolor sit ipsum dolor sit amet!
                        ametlaurem ipsum dolor sit ametlaurem ipsum 
                        dolor sit amet!</p>
                </div>
                <h2 className="reads_and_time">
                    <span>678 M Reads</span>
                    <span>1hr ago</span>
                    <span><button className="read_btn">Read</button></span>
                </h2>
                <div className="trends">
                    <h1><BsStarHalf /><span>3m comends</span></h1>
                    <h1><MdForum /><span>2.5k comments</span></h1>
                    <h1><MdShare/><span>Share</span> </h1>
                </div>


            
        </div>
        
        <div className="news_box">
                <button className="company_name">
                    The Watcher
                </button>
                <div className="image_card">
                    <img src="./photos/Cake.jpg" alt="" />
                </div>

                <h1 className="headline">
                Breaking News: FGN Talks About Reimplementing Subcidy
                </h1>
                <div className="sub_headline">
                    <p> laurem ipsum dolor sit ipsum dolor sit amet!
                        ametlaurem ipsum dolor sit ametlaurem ipsum 
                        dolor sit amet!</p>
                </div>
                <h2 className="reads_and_time">
                    <span>678 M Reads</span>
                    <span>1hr ago</span>
                    <span><button className="read_btn">Read</button></span>
                </h2>
                <div className="trends">
                    <h1><BsStarHalf /><span>3m comends</span></h1>
                    <h1><MdForum /><span>2.5k comments</span></h1>
                    <h1><MdShare/><span>Share</span> </h1>
                </div>


            
        </div>

        <br /><br />

       

    </IconContext.Provider>
    </div> );
}
 
export default NewsPage;
