import React from "react";


export default class Icons extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        // console.log(this.props);
    }

    render(){
        var demoClass="col-"+this.props.panel.class;
        return(
            <div className="row">
                {
                    this.props.panel.demo.map(function(value,key){
                        return (<div key={key} className={demoClass}>
                            <div className="demo-icon">
                                <div className="icon-preview">
                                    <i className={value}></i>
                                </div>
                                <div className="icon-class">{value}</div>
                            </div>
                        </div>)
                    })
                }
            </div>
        )
    }

}