import './Profile.css';
import { MdEdit, MdStarHalf } from "react-icons/md";
import { IconContext } from "react-icons";


const Profile = () => {

    return ( <div className='profile'>
                        <IconContext.Provider value={{
            size: '20',
            color: 'blue',

        }}>


<br /><br /><br />

        <div className="profile_box">
            <div className="profile_baner">

                <img src="./photos/Dear.jpg" alt="" />

            </div>

            <div className="absolute_wrap">

            <div className="profile_image">
                        <img src="./photos/Cake.jpg" alt="" />  
                   </div>

                        
            <div className="edit_profile_photo">
                        <span><MdEdit/></span>
                   </div> 

            <div className="star_page">Visit Star Page</div>


            </div>


            <div className="profile_details">

                <ul>
                <h2 className="star_rank"><MdStarHalf/>7.5M</h2>


                <li>
                        <h3>Hsandle</h3>  <span>@DauskiDi</span>
                 </li>

                    <li>
                        <h3>Name</h3>  <span>Dauda Sikiru Daniel</span>
                    </li>
                    

                    <li>
                        <h3>Gender</h3>  <span>Male</span>
                    </li>
                    <li>
                        <h3>Occupation</h3>  <span>Dauda Sikiru Daniel</span>
                    </li>
                    
                    <li>
                        <h3>Skills</h3>  <span>Dauda Sikiru Daniel</span>
                    </li>

                    <li>
                        <h3>Birthday</h3>  <span>October 22nd</span>
                    </li>
                    <li>
                        <h3>Hubbies</h3>  <span>Dauda Sikiru Daniel</span>
                    </li>
                    <li>
                        <h3>Your personality</h3>  <span>Quiet and Loud</span>
                    </li>
                    <li>
                        <h3>Public Address</h3>  <span>Dauda Sikiru Daniel</span>
                    </li>

                    <button id="edit_profile">Edit profile information</button>

                    
                </ul>
<br /><br />
            </div>

        </div>

        </IconContext.Provider>


    </div> );
}
 
export default Profile;