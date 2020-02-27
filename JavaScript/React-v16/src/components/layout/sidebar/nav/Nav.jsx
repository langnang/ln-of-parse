import React,{Component} from 'react';

import Item from './item/Item';

class Nav extends Component{
    constructor(props){
        // console.log("constructor");
        super(props);
        this.state={
            panel:{
                "items":[
                    {
                        "link":"/",
                        "icon":"dashboard",
                        "item":"DashBoard",
                        "badge":{
                            "value":"5"
                        }
                    },
                    {
                        "link":"/Components",
                        "icon":"table",
                        "item":"Components",
                        "badge":{
                            "value":"14"
                        }
                    },
                    {
                        "link":"/Forms",
                        "icon":"keyboard-o",
                        "item":"Forms",
                        "badge":{
                            "value":"50"
                        }
                    },
                    {
                        "link":"/Tables",
                        "icon":"th",
                        "item":"Tables",
                        "badge":{
                            "value":"6"
                        }
                    },
                    {
                        "link":"/Notifications",
                        "icon":"bell",
                        "item":"Notifications",
                        "badge":{
                            "class":"success",
                            "value":"3"
                        }
                    },
                    {
                        "link":"/Typography",
                        "icon":"font",
                        "item":"Typography",
                        "badge":{
                            "class":"danger",
                            "value":"25"
                        }
                    },
                    {
                        "link":"/Icons",
                        "icon":"fonticons",
                        "item":"Icons"
                    }
                ]
            }
        };
    }
    componentWillMount(){
        // console.log("componentWillMount");
    }

    render(){
        // console.log("render");
        // console.log(this.props);
        return(
            <ul className="nav" tag-role="Sidebar-Nav-Ul">
            {
                this.props.panel.items?(
                    this.props.panel.items.map(function(item,key){
                        return (
                            <Item
                                key={key} 
                                panel={item}
                            />
                        )
                    })
                ):(
                    this.state.panel.items.map(function(item,key){
                        return (
                            <Item
                                key={key}
                                panel={item}
                                order={key}
                            />
                        )
                    })
                )
            }
                <li className="nav-item update-pro">
                    <button data-toggle="modal" data-target="#modalUpdate">
                        <i className="la la-hand-pointer-o"></i>
                        <p>Update To Pro</p>
                    </button>
                </li>
            </ul>
        );
    }

    componentDidMount(){
        // console.log("componentDidMount");
    }
    componentWillReceiveProps(){
        // console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(){
        // console.log("shouldComponentUpdate");
    }
    componentWillUpdate(){
        // console.log("componentWillUpdate");
    }
    

    rebuildItemsArray(){
        // console.log(this.props);
    }
    
}

export default Nav;