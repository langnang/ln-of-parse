import React from 'react';


export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        // console.log(props);
    }

    render(){
        return(
            <li
                className={
                    this.props.panel.active?
                    "nav-item active":
                    "nav-item"
                }
            >
                <a href={this.props.panel.link}>
                    <i className={"la la-"+this.props.panel.icon}></i>
                    <p>{this.props.panel.item}</p>
                    {
                        this.props.panel.badge?(
                            <span className={"badge badge-"+(this.props.panel.badge.class?this.props.panel.badge.class:"count")}>
                                {this.props.panel.badge.value}
                            </span>
                        ):""
                    }
                </a>
            </li>
        );
    }

}