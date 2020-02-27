import React from 'react';

export default class Radio extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <label className="form-radio-label">
                <input
                    className="form-radio-input"
                    type="radio"
                    defaultValue=""
                    defaultChecked={this.props.panel.isChecked}
                    disabled={this.props.panel.isDisabled}
                />
                <span className="form-radio-sign">{this.props.panel.value}</span>
            </label>
        )
    }
}