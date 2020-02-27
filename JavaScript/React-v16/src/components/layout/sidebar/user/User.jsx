import React,{Component} from 'react';

import profile from './../../../../img/profile.jpg';


class User extends Component{
    render(){
        return(
            <div className="user">
                <div className="photo">
                    <img src={profile} alt="" />
                </div>
                <div className="info">
                    <a className="" data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                        <span>
                            Hizrian
                            <span className="user-level">Administrator</span>
                            <span className="caret"></span>
                        </span>
                    </a>
                    <div className="clearfix"></div>

                    <div className="collapse in" id="collapseExample" aria-expanded="true">
                        <ul className="nav">
                            <li>
                                <a href="#profile">
                                    <span className="link-collapse">My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#edit">
                                    <span className="link-collapse">Edit Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#settings">
                                    <span className="link-collapse">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;