import React from 'react';

import Icons from './../../../icons/Icons';
import Forms from './../../../forms/Forms';

export default class CardBody extends React.Component{
    constructor(props){
        super(props);
        this.state={
            icons:{

            }
        }
    }

    render(){
        return(
            <div className="card-body">
            {
                Object.keys(this.props.panel).map((key)=>{
                    switch(key){
                        case "icons":
                        return (
                            <Icons
                                key={key}
                                panel={this.props.panel[key]}
                            />
                        );
                        case "forms":
                        return (
                            <Forms
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