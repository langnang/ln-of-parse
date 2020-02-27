import React from 'react';


import PageTitle from './layout/pagetitle/PageTitle'; 
import Footer from './layout/footer/Footer';
import Card from './layout/card/Card';

import LayoutPageData from './../pages/layout.json';

export default class Components extends React.Component{
    constructor(props){
        super(props);
        this.state={
            panel:{

            }
        };
        // console.log(this.props);
        switch(this.props.panel.location.pathname){
            case "/":
            this.state.panel=LayoutPageData.Content["Home"];
            break;
            default:
            // console.log(LayoutPageData.Content[this.props.panel.location.pathname.slice(1)])
            if(LayoutPageData.Content[this.props.panel.location.pathname.slice(1)]!==undefined){
                this.state.panel=LayoutPageData.Content[this.props.panel.location.pathname.slice(1)];
            }else{
                this.state.panel=LayoutPageData.Content["Home"];
            }
            break;
        }

        // console.log(this.state.panel);

        LayoutPageData.Sidebar.Nav.items[this.state.panel.sidebar].active=true;
    }
    render(){
        // console.log(this.state);
        return(
            <div className="main-panel">
                <div className="content">
                    <div className="container-fluid">
                        <PageTitle panel={this.state.panel.pageTitle}/>
                        {
                            this.state.panel.row.map(function(row,key){
                                return (
                                    <div key={key} className="row">
                                        {
                                            row.map(function(col,key){
                                                return (
                                                    <div key={key} className={"col-"+col.class}>
                                                        <Card panel={col.card}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}