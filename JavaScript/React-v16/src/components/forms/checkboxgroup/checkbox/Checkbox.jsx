import React from 'react';

export default class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <label className="form-check-label">
                <input className="form-check-input" type="checkbox" defaultValue="" defaultChecked={this.props.panel.isChecked} disabled={this.props.panel.isDisabled}/>
                <span className="form-check-sign">{this.props.panel.value}</span>
            </label>
        )
    }


}