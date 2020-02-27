import React from 'react';

import Children from './children/Children';


export default class Div extends React.Component{
    constructor(props){
        super(props);
        this.state={
            panel:{
                class:"",
                "tag-role":""
            }
        };
        switch(this.props["tag-role"]){
            case "Layout-Div":
            case "Header-Div":
            case "Sidebar-Div":
            case "Sidebar-Inner-Div":
            case "Panel-Div":
            case "Panel-Content-Div":
            break;
            case "undefined":
            default:
                console.log(this.props);
            break;
        }
        
    }

    render(){
        return(
            <div
                className={
                    this.props.panel?(
                        this.props.panel.class
                    ):null
                }
                tag-role={
                    this.props.panel?(
                        this.props["tag-role"]
                    ):null
                }
            >
            {
                this.props.children?(
                    <Children
                        panel={this.props.children}
                        tag-role={this.props["tag-role"]+"-Children"}
                    />
                ):null
            }
            </div>
        )
    }

}
