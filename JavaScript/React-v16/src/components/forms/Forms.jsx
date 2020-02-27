import React from 'react';

import FormControls from './controls/FormControls';

export default class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        console.log(props);
        console.log(this);
    }

    render(){
        return(
            <form>
            {
                Object.keys(this.props.panel).map((key,value)=>{
                    switch(key){
                        case "controls":
                        return (
                            <FormControls 
                                key={value}
                                panel={this.props.panel[key]}
                            />
                        );
                        default:
                        return "";
                    }
                })
            }
            </form>
        )
    }
}