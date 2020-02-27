import React from 'react';

import ChildrenCopy from './ChildrenCopy';

export default class Children extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        switch(this.props["tag-role"]){
            case "Layout-Div-Children":
            case "Header-Div-Children":
            case "Sidebar-Div-Children":
            case "Sidebar-Inner-Div-Children":
            case "Panel-Div-Children":
            case "Panel-Content-Div-Children":
            break;
            case "undefined":
            default:
                console.log(this.props);
            break;
        }
    }

    render(){
        return(
            this.props.panel?(
                // is exist panel length
                typeof(this.props.panel.length)==="number"?(
                    // if type is number-->Array(panel)
                    this.props.panel.map(function(v,k){
                        return(
                            v.props.chilren?(
                                <ChildrenCopy panel={v.props.children}/>
                            ):(
                                React.createElement(
                                    v.type,
                                    {
                                        key:k,
                                        panel:v.props.panel,
                                        "tag-role":v.props["tag-role"]+"-Children"
                                    },
                                    v.props.children?
                                    v.props.children:
                                    null
                                )
                            )
                        )
                        
                    })
                ):(
                    // if type is not number --> JSON(panel)
                    React.createElement(
                        this.props.panel.type,
                        {
                            "tag-role":this.props.panel.props["tag-role"],
                            panel:this.props.panel.props.panel
                        },
                        this.props.panel.props.children?
                        this.props.panel.props.children:
                        null
                    )
                )
            ):
            console.warn("No Children")
        )
    }
}