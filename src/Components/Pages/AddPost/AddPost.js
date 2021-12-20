import './AddPost.css';
import{ MdMusicNote, MdLiveTv, MdPhoto } from "react-icons/md"
import { IconContext } from "react-icons";

const AddPost = () => {


    return ( <div className="addpost">

        
<IconContext.Provider value={{
            color: "blue",
            size: "18px"
        }}>


        <br /><br /><br /><br />
        <div id="addpost_box">
            <div id="addpost_photo">
                {/* <img src="./photos/Cake.jpg" alt="" /> */}
            </div>
            <div id="available_medias">
                <span><MdPhoto/> Add Photo</span>
                <span><MdLiveTv/>Add Video</span>
                <span><MdMusicNote/>Add Audio</span>
            </div>
            <input id ="file_input" type="file" />
            <textarea id="text_input" type="text" placeholder="text input" />
            <button id="post_send_btn">Post</button>
        </div>

        
        </IconContext.Provider>
    </div> );
}
 
export default AddPost;