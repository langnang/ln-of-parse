import React from 'react';


import Radio from './radio/Radio';

export default class RadioGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        // console.log(this.props);
    }
    render(){
        return(
            <div>
                {
                    this.props.panel.radios.map(function(value,key){
                        return (<Radio key={key} panel={value} />)
                    })
                }
            </div>
        )
    }
}