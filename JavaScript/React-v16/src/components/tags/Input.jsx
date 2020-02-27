import React from 'react';


export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
        console.log(props);
    }

    render(){
        return(
            <input
                type={this.props.panel.type?this.props.panel.type:"text"}
                id={this.props.panel.id}
                className={this.props.panel.class}
                placeholder={this.props.panel.placeholder}
            />
        )
    }
}