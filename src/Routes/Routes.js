import React from 'react';
import "./Routes"

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//Mobile screens nave components
import MobileTopNav from '../Components/MobileNavs/MobileTopNav'
import MobileBottomNav from '../Components/MobileNavs/MobileBottomNav'

//Tablet screens nave components
import TabletSideNav from '../Components/TabletNavs/TabletSideNav';
import TabletTopNav from '../Components/TabletNavs/TabletTopNav';
import TabletBottomNav from '../Components/TabletNavs/TabletBottomNav';

//Desktop screens nave components
import DesktopLeftNav from '../Components/DesktopNavs/DesktopLeftNav';
import DesktopRightNav from '../Components/DesktopNavs/DesktopRightNav';
import DesktopTopNav from '../Components/DesktopNavs/DesktopTopNav';





//WebPages components
// import Login from '../Components/Login & Register/LogIn/Login';
// import Register from '../Components/Login & Register/Register/Register'
import HomePage from '../Components/Pages/HomePage/HomePage'
import AddPost from '../Components/Pages/AddPost/AddPost';
import Messages from '../Components/Pages/Messages/Messages';
import NewsPage from '../Components/Pages/NewsPage/NewsPage';
import Notifications from '../Components/Pages/Notifications/Notifications';
import Friends from '../Components/Pages/Friends/Friends';
import Profile from '../Components/Pages/Profile/Profile';
import VideosPage from '../Components/Pages/VideosPage/VideosPage';


const Routes = () => {


    return ( <div className="rutes">
    
        <Router>
            
             {/* mobile navs components */}
             <MobileTopNav />
            <MobileBottomNav />


            {/* Tablet navs componnts */}
            <TabletSideNav />
            <TabletTopNav />
            <TabletBottomNav />

            {/* Desktop navs components */}
            <DesktopLeftNav />
            <DesktopTopNav />
            <DesktopRightNav />





            <Switch>
    

                {/* <Route exact path='/'>
                   <Login />
                </Route> */}

                 {/* <Route exact path='/register'>
                    <Register />
                </Route> */}

                <Route exact path='/homePage'>
                      <HomePage />
                </Route>

                <Route exact path='/messages'>
                    <Messages />
                </Route>

                <Route exact path='/videos'>
                    <VideosPage />
                </Route>

                <Route exact path='/news'>
                    <NewsPage />
                </Route>
            
                <Route exact path='/addpost'>
                    <AddPost />
                </Route>
                      
                <Route exact path='/profile'>
                    <Profile />
                </Route>
            
                <Route exact path='/notifications'>
                    <Notifications />
                </Route>
                 
                <Route exact path='/friends'>
                    <Friends />
                </Route>
                 


            </Switch>
        </Router>



    </div> );
}
 
export default Routes;