import React from 'react';

import Label from './../../tags/Label';
import Input from './../../tags/Input';
import Small from './../../tags/Small';

export default class FormControls extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
        console.log(props);
    }
    render(){
        console.log(this.props.panel.input);
        if(this.props.panel.input){
            this.props.panel.input.class=
            this.props.panel.input.class?
            this.props.panel.input.class+" form-control":
            "form-control";
        }

        return(
            <div className="form-group">
            {
                Object.keys(this.props.panel).map(key=>{
                    switch(key){
                        case "label":
                        return (
                            <Label
                                key={key}
                                panel={this.props.panel[key]}
                            />
                        );
                        case "input":
                        return (
                            <Input
                                key={key}
                                panel={this.props.panel[key]}
                            />
                        );
                        case "small":
                        return (
                            <Small
                                key={key}
                                panel={this.props.panel[key]}
                            />
                        );
                        default:
                        return "";
                    }
                })
            }
            </div>
        )
    }
}