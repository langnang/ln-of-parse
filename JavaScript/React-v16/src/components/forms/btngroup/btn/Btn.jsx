import React from 'react';

export default class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        // console.log(props);
    }

    render(){
        var classGroup=["btn"];
        if(this.props.panel.class){
            this.props.panel.class.map(function(value){
                classGroup.push("btn-"+value);
                return "";
            })
        }

        return(
            <button
                className={classGroup.join(" ")} disabled={this.props.panel.disabled===true?"disabled":""} 
            >{this.props.panel.value}</button>
        )
    }
}