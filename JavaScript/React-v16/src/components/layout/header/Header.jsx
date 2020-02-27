import React,{Component} from 'react';

import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';

import Div from './../../tags/Div';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            panel:{
                Logo:{
                    title:"Ready Dashboard"
                },
                Navbar:{
                    
                }
            }
        };
        // console.log(this.props);
    }
    render(){
        return(
            <Div panel={{class:"main-header"}} tag-role="Header-Div">
                <Logo
                    panel={
                        this.props.panel?
                        this.props.panel.Logo:
                        this.state.panel.Logo
                    }
                />
                <Navbar
                    panel={
                        this.props.panel?
                        this.props.panel.Navbar:
                        this.state.panel.Navbar
                    }
                />
            </Div>
        );
    }
}

export default Header;