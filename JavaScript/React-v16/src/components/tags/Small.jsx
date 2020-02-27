import React from 'react';


export default class Small extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
        // console.log(props);
    }

    render(){
        return(
            <small
                htmlFor={this.props.panel.for}
            >
                {this.props.panel.value}
            </small>
        )
    }
}