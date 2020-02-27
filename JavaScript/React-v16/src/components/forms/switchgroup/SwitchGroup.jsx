import React from 'react';

import Switch from './switch/Switch';


export default class SwitchGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        console.log(props);
    }
    
    render(){
        return(
            <div>
                {
                    this.props.panel.switchs.map(function(value,key){
                        return(
                            <Switch
                                key={key}
                                panel={value}
                            />
                        )
                    })
                }
            </div>
        )
    }
}