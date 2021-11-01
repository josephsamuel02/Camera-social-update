import './VideosPage.css';
import { MdThumbUp,  MdForum, MdShare } from "react-icons/md";
import { IconContext } from "react-icons";

const VideosPage = () => {
    return ( <div className="video_pge">
                <IconContext.Provider value={{
            size: '17',
            color: 'blue',

        }}>

        <br /><br /><br />

        <div className="video_card">
            <div className="video_box">
                <video src="./video/Pharrell_Williams_Happy.mp4" controls poster="./photos/woman-332278_1920.jpg"></video>
            </div>
            <div className="video_title">
                <p>The Unlimited Grace Of God</p>
            </div>
            <h4 className="video_trends">
                <span>6.3 m views</span><span> 2hr</span>
            </h4>
            <div className="channel_detail">
                <img src="./photos/Cake.jpg" alt="" />
                <h3 className="channel_name">Revival Fire</h3>
                <button className="post_subscrib_btn">Subscribe</button>
            </div>
            <div className="actions">
                <h1><MdThumbUp /><span>Like</span><span>4.3m</span></h1>
                <h1><MdForum /><span>comments</span><span>41</span></h1>
                <h1><MdShare /><span>share</span></h1>
            </div>


        </div>


        <div className="video_card">
            <div className="video_box">
                <video src="" poster="./photos/confrence.jpg" controls ></video>
            </div>
            <div className="video_title">
                <p>The Unlimited Grace Of God</p>
            </div>
            <h4 className="video_trends">
                <span>6.3 m views</span><span> 2hr</span>
            </h4>
            <div className="channel_detail">
                <img src="./photos/Cake.jpg" alt="" />
                <h3 className="channel_name">Revival Fire</h3>
                <button className="post_subscrib_btn">Subscribe</button>
            </div>
            <div className="actions">
                <h1><MdThumbUp /><span>Like</span><span>4.3m</span></h1>
                <h1><MdForum /><span>comments</span><span>41</span></h1>
                <h1><MdShare /><span>share</span></h1>
            </div>


        </div>

        
        <div className="video_card">
            <div className="video_box">
                <video src="./video/Pharrell_Williams_Happy.mp4" controls poster="./photos/woman-332278_1920.jpg"></video>
            </div>
            <div className="video_title">
                <p>The Unlimited Grace Of God</p>
            </div>
            <h4 className="video_trends">
                <span>6.3 m views</span><span> 2hr</span>
            </h4>
            <div className="channel_detail">
                <img src="./photos/Cake.jpg" alt="" />
                <h3 className="channel_name">Revival Fire</h3>
                <button className="post_subscrib_btn">Subscribe</button>
            </div>
            <div className="actions">
                <h1><MdThumbUp /><span>Like</span><span>4.3m</span></h1>
                <h1><MdForum /><span>comments</span><span>41</span></h1>
                <h1><MdShare /><span>share</span></h1>
            </div>


        </div>

        <div className="video_card">
            <div className="video_box">
                <video src="" controls ></video>
            </div>
            <div className="video_title">
                <p>The Unlimited Grace Of God</p>
            </div>
            <h4 className="video_trends">
                <span>6.3 m views</span><span> 2hr</span>
            </h4>
            <div className="channel_detail">
                <img src="./photos/Cake.jpg" alt="" />
                <h3 className="channel_name">Revival Fire</h3>
                <button className="post_subscrib_btn">Subscribe</button>
            </div>
            <div className="actions">
                <h1><MdThumbUp /><span>Like</span><span>4.3m</span></h1>
                <h1><MdForum /><span>comments</span><span>41</span></h1>
                <h1><MdShare /><span>share</span></h1>
            </div>


        </div>


        <br /><br />


        </IconContext.Provider>  

    </div> );
}
 
export default VideosPage;