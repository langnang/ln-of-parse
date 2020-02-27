import React from 'react';

import Checkbox from './checkbox/Checkbox';

export default class CheckboxGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        // console.log(props);
    }
    render(){
        return(
            <div className="">
            {
                this.props.panel.checkboxs.map(function(value,key){
                    return (<Checkbox key={key} panel={value} />)
                })
            }
            </div>
        )
    }
}