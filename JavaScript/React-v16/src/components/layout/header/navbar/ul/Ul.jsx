import React,{Component} from 'react';

import profile from './../../../../../img/profile.jpg';

class Ul extends Component{
    render(){
        return(
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                <li className="nav-item dropdown hidden-caret">
                    <a className="nav-link dropdown-toggle" href="#123" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="la la-envelope"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#123">Action</a>
                        <a className="dropdown-item" href="#123">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#123">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown hidden-caret">
                    <a className="nav-link dropdown-toggle" href="#123" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="la la-bell"></i>
                        <span className="notification">3</span>
                    </a>
                    <ul className="dropdown-menu notif-box" aria-labelledby="navbarDropdown">
                        <li>
                            <div className="dropdown-title">You have 4 new notification</div>
                        </li>
                        <li>
                            <div className="notif-center">
                                <a href="#123">
                                    <div className="notif-icon notif-primary"> <i className="la la-user-plus"></i> </div>
                                    <div className="notif-content">
                                        <span className="block">
                                            New user registered
                                        </span>
                                        <span className="time">5 minutes ago</span> 
                                    </div>
                                </a>
                                <a href="#123">
                                    <div className="notif-icon notif-success"> <i className="la la-comment"></i> </div>
                                    <div className="notif-content">
                                        <span className="block">
                                            Rahmad commented on Admin
                                        </span>
                                        <span className="time">12 minutes ago</span> 
                                    </div>
                                </a>
                                <a href="#123">
                                    <div className="notif-img"> 
                                        <img src="./../../../../../img/profile2.jpg" alt="Img Profile" />
                                    </div>
                                    <div className="notif-content">
                                        <span className="block">
                                            Reza send messages to you
                                        </span>
                                        <span className="time">12 minutes ago</span> 
                                    </div>
                                </a>
                                <a href="#123">
                                    <div className="notif-icon notif-danger"> <i className="la la-heart"></i> </div>
                                    <div className="notif-content">
                                        <span className="block">
                                            Farrah liked Admin
                                        </span>
                                        <span className="time">17 minutes ago</span> 
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#123" aria-expanded="false"> 
                        <img src={profile} alt="user-img" width="36" className="img-circle" />、
                        <span>Hizrian</span> 
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <div className="user-box">
                                <div className="u-img"><img src="assets/img/profile.jpg" alt="user"/></div>
                                <div className="u-text">
                                    <h4>Hizrian</h4>
                                    <p className="text-muted">hello@themekita.com</p>
                                    <a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                    </div>
                                </div>
                            </li>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#123"><i className="ti-user"></i> My Profile</a>
                            <a className="dropdown-item" href="#123"> My Balance</a>
                            <a className="dropdown-item" href="#123"><i className="ti-email"></i> Inbox</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#123"><i className="ti-settings"></i> Account Setting</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#123"><i className="fa fa-power-off"></i> Logout</a>
                        </ul>
                    </li>
                </ul>
        )
    }
}

export default Ul;