import React from 'react';

export default class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="toggle btn btn-default" data-toggle="toggle">
                <input type="checkbox" data-toggle="toggle" data-onstyle="default"/>
                <div className="toggle-group">
                    <label className="btn btn-default toggle-on">On</label>
                    <label className="btn btn-default active toggle-off">Off</label>
                    <span className="toggle-handle btn btn-default"></span>
                </div>
            </div>
        )
    }
}