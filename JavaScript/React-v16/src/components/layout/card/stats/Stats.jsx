import React from 'react';


export default class Stats extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={};
    }
    render(){
        return(
            <div className="card-body">
                <div className="row">
                    <div className="col-5">
                        <div className="icon-big text-center">
                            <i className={["la","la-"+this.props.panel.icon].join(" ")}></i>
                        </div>
                    </div>
                    <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                            <p className="card-category">{this.props.panel.category}</p>
                            <h4 className="card-title">{this.props.panel.number}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}