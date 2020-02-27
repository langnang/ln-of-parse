import React from 'react';
import Btn from './btn/Btn';

export default class BtnGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        // console.log(props);
    }
    render(){
        return(
            <div className={this.props.panel.isGroup===false?"":"btn-group"}>
            {
                this.props.panel.btns.map(function(value,key){
                    return (<Btn key={key} panel={value}/>)
                })
            }
            </div>
        )
    }
}