import React from 'react';


export default class Label extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
        // console.log(props);
    }

    render(){
        return(
            <label
                htmlFor={this.props.panel.for}
            >
                {this.props.panel.value}
            </label>
        )
    }
}