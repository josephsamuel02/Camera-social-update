import './HomePage.css'

import { MdThumbUp, MdForum, MdShare } from "react-icons/md";
import { IconContext } from "react-icons";
// import { BsPlayFill } from "react-icons/bs";
// import { Link } from "react-router-dom";



const Home = () => {
    const audio = document.querySelector('audio');
    //  const audio_play = document.querySelector(".play_btn");
    // const audio_pause = document.querySelector("pause_btn");


    // const play_audio  = (e) =>{
    //     audio.play();
    //      audio_play.style.display="";
    //      audio_pause.style.display="contents";

    // }

    
    // const pause_audio  = (e) =>{
    //     audio.pause();
    //      audio_pause.style.display="none";
    //      audio_play.style.display="contents";

    // }






    return ( <div className="home">
        
        <IconContext.Provider value={{
            size: '15',
            color: 'blue',

        }}>

            <br /><br /><br /><br />

            <div className="posts_box">
                
                 <div className="poster_detail">
                    <img src="/photos/Cake.jpg" alt="" />
                    <span className="poster_name">David michael</span>
                </div>    

                     <div className="post_image_box">
                        <img src="./photos/confrence.jpg" alt="" />
                    </div> 

                     {/* <div className="post_texts">
                        <p>laurem ipsum dolor sit amet
                             laurem ipsum dolor sit ametlaurem 
                             ipsum dolor sit ametlaurem ipsum dolor 
                              ametlaurem <br /> ipsum dolor sit amet! 
                            ametlaurem ipsum dolor sit 
                            laurem ipsum dolor sit ametlaurem 
                             ipsum dolor sit ametlaurem ipsum dolor 
                              ametlaurem ipsum dolor sit amet! 
                            ametlaurem ipsum dolor sit 
                            ametlaurem ipsum dolor sit amet!</p>

                    </div>  */}

                    <span className="posted_time">
                         <span>3 days ago</span> 
                         <span className="view_post">view</span>
                    </span>

                    <div className="actions">
                        <h1 id="like_btn"><MdThumbUp/><span>Like<span>4</span></span> </h1>
                        <h1 id="comment_btn"><MdForum/><span>Comments<span>4</span></span> </h1>
                        <h1 id="share_btn"><MdShare/><span>Share</span> </h1>

                    </div>


         
            </div>

            <div className="audio_post_box">
                <div className="audio_owner_detail">
                    <img src="./photos/Cake.jpg" alt="" />
                    <h4 className="owner_name">Mathew John</h4>

                </div>
                <div className="audio_poster">
                    <img src="./photos/golden headset.png" alt="" />
                </div>
                <h2 className="about-audio">
                    <p>Send down the army, me and my friends during our
                    last retreat me and my friends during our last </p>
                </h2>
                <div className="audio_navigations">

                              <div className="audio_image_box">
                                <img src="./photos/golden headset.png" alt="" />
                            </div>

                            <audio className="audio" src="./Audio/Panam parcy paul God of war.mp3" controls id="audio" />

                            {/*<h1 className="play_pause_btn">
                                <span className="play-btn"  onClick={ (e) => play_audio() }>
                                    <BsPlayFill/>
                                </span>
                                <span className="pause-btn"  onClick={ (e) => pause_audio()}>
                                    <BsPauseFill/>
                                </span>
                            </h1>
                            <h3 className="progressbar"><span></span></h3>
                            <span> 6:34</span> */}
                </div>

                
                <div className="actions">
                        <h1 id="like_btn"><MdThumbUp/><span>Like<span>4</span></span> </h1>
                        <h1 id="comment_btn"><MdForum/><span>Comments<span>4</span></span> </h1>
                        <h1 id="share_btn"><MdShare/><span>Share</span> </h1>

                    </div>
            </div>
 
            <div className="posts_box">
                
                <div className="poster_detail">
                    <img src="/photos/Cake.jpg" alt="" />
                    <span className="poster_name">David michael</span>
                </div>   

                    <div className="post_image_box">
                        <img src="./photos/people-3104635_1920.jpg" alt="" />
                    </div>

                    
                    <div className="post_texts">
                        <p>laurem ipsum dolor sit amet
                             laurem ipsum dolor sit ametlaurem 
                             ipsum dolor sit ametlaurem ipsum dolor 
                              ametlaurem <br /> ipsum dolor sit amet! 
                            ametlaurem ipsum dolor sit 
                            laurem ipsum dolor sit ametlaurem 
                             ipsum dolor sit ametlaurem ipsum dolor 
                              ametlaurem ipsum dolor sit amet! 
                            ametlaurem ipsum dolor sit 
                            ametlaurem ipsum dolor sit amet!</p>

                    </div> 

                                        <span className="posted_time">
                         <span>3 days ago</span> 
                         <span className="view_post">view</span>
                    </span>

                    <div className="actions">
                        <h1 id="like_btn"><MdThumbUp/><span>Like<span>4</span></span> </h1>
                        <h1 id="comment_btn"><MdForum/><span>Comments<span>4</span></span> </h1>
                        <h1 id="share_btn"><MdShare/><span>Share</span> </h1>

                    </div>


         
            </div>


            <div className="posts_box">
                
                <div className="poster_detail">
                    <img src="/photos/Cake.jpg" alt="" />
                    <span className="poster_name">David michael</span>
                </div>   

                    <div className="post_image_box">
                        <img src="./photos/microphone boy.jpg" alt="" />
                    </div>
                                        <span className="posted_time">
                         <span>3 days ago</span> 
                         <span className="view_post">view</span>
                    </span>

                    <div className="actions">
                        <h1 id="like_btn"><MdThumbUp/><span>Like<span>4</span></span> </h1>
                        <h1 id="comment_btn"><MdForum/><span>Comments<span>4</span></span> </h1>
                        <h1 id="share_btn"><MdShare/><span>Share</span> </h1>

                    </div>


         
            </div>

            <div className="posts_box">
                
                <div className="poster_detail">
                    <img src="/photos/Cake.jpg" alt="" />
                    <span className="poster_name">David michael</span>
                </div>   

                    <div className="post_image_box">
                        <img src="./photos/woman-332278_1920.jpg" alt="" />
                    </div>
                                        <span className="posted_time">
                         <span>3 days ago</span> 
                         <span className="view_post">view</span>
                    </span>

                    <div className="actions">
                        <h1 id="like_btn"><MdThumbUp/><span>Like<span>4</span></span> </h1>
                        <h1 id="comment_btn"><MdForum/><span>Comments<span>4</span></span> </h1>
                        <h1 id="share_btn"><MdShare/><span>Share</span> </h1>

                    </div>

            </div>


            <br /><br />



        </IconContext.Provider>
    </div> );
}
 
export default Home;