import React from 'react';

export default class CardHeader extends React.Component{
    constructor(props){
        super(props);
        this.panel={
            title:"",
            category:""
        };
        // console.log(props);
    }

    render(){
        return(
            <div className="card-header">
            {
                this.props.panel.title?(
                    <h4 className="card-title">{this.props.panel.title}</h4>
                ):""
            }
            {
                this.props.panel.category?(
                    <p className="card-category">{this.props.panel.category}</p>
                ):""

            }
            </div>
        )
    }
}