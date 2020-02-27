import React from 'react';

import ChildrenCopy from './Children';

export default class Children extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        console.log(props);
    }

    render(){
        return(
            this.props.panel?(
                // 判断children长度的类型
                typeof(this.props.panel.length)==="number"?(
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
                                        "tag-role":v.props["tag-role"]
                                    },
                                    v.props.children?
                                    v.props.children:
                                    null
                                )
                            )
                        )
                        
                    })
                ):(
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