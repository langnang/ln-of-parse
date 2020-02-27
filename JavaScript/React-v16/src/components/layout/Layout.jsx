import React from 'react';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Panel from './panel/Panel';
import Extra from './../extra/Extra';

import Div from './../tags/Div';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            panel:{
                class:"wrapper"
            }
        };
        // console.log(this.props);
    }

    render(){
        return(
            <Div panel={this.state.panel} tag-role="Layout-Div">
                <Header tag-role="Header"/>
                <Sidebar tag-role="Sidebar"/>
                <Panel tag-role="Panel" />
                <Extra tag-role="Extra"/>
            </Div>
        )
    }
}