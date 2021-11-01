import './DesktopLeftNav.css'
import{ MdForum, MdPeople, MdNotificationsActive } from "react-icons/md"
import { IconContext } from "react-icons";

const DesktopLeftNav = () => {
    
    return ( <nav className="desktopleftnav">

<IconContext.Provider value={{
            color: "dodgerblue",
            size: "20px"
        }}>


<h1 id="logo">Camera</h1>

<div id="notificationsbox">
            <h3 id="notestitle"> <MdNotificationsActive /> <span>notifications</span> </h3>
            <div id="notificationslist">
                
                <ul>
                        
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">John Franklin</span> <span>sent you a photo of himself and others</span></li>
                    <li><span className="name">Jona Franklin</span> <span>sent you a photo of himself and others</span></li>


                    

                </ul>


            </div>
        </div>




        <div id="friendsbtn">
            <h3><MdPeople /> <span>friends</span> </h3>
        </div>



        <div id="messagebox">
            <h3 id="messagetitle"><MdForum /> <span>messages  <span id="msgcount">7</span></span> </h3>
            <div id="messagelist">
                
                <ul>
                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">John Franklin</span> 
                        <span className="indicator"></span> 
                    </li>                        
                    <li>
                        <span className="chatphoto"><img src="photos/Cake.jpg" alt='' /></span> 
                        <span className="name">Jona Franklin</span> 
                        <span className="indicator"></span> 
                    </li>
                    <br /><br /><br /><br />



                </ul>


            </div>
        </div>

        </IconContext.Provider>
 
    </nav> );
}
 
export default DesktopLeftNav;