import React,{Component} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './../../../../pages/Home'
import Components from './../../../../pages/Components'
import Forms from './../../../../pages/Forms'
import Tables from './../../../../pages/Tables'
import Notifications from './../../../../pages/Notifications'
import Typography from './../../../../pages/Typography'
import Icons from './../../../../pages/Icons'

import Div from './../../../tags/Div';



class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            pageTitle:{
                title:"Dashboard"
            },
            row:[
                [
                    {
                        class:"md-3",
                        card:{
                            bg:"warning",
                            stats:{
                                icon:"users",
                                category:"Visitors",
                                number:"1,294"
                            }
                        }
                    },
                    {
                        class:"md-3",
                        card:{
                            bg:"success",
                            stats:{
                                icon:"bar-chart",
                                category:"Sales",
                                number:"$ 1,345"
                            }

                        }
                    },
                    {
                        class:"md-3",
                        card:{
                            bg:"danger",
                            stats:{
                                icon:"newspaper-o",
                                category:"Subscribers",
                                number:"1303"
                            }

                        }
                    },
                    {
                        class:"md-3",
                        card:{
                            bg:"primary",
                            stats:{
                                icon:"check-circle",
                                category:"Order",
                                number:"576"
                            }

                        }
                    }
                ],
                [
                    {
                        class:"md-3",
                        card:{
                            header:{
                                title:"Task",
                                category:"Complete"
                            }
                        }
                    },
                    {
                        class:"md-9",
                        card:{
                            header:{
                                title:"World Map",
                                category:"Map of the distribution of users around the world"
                            }
                        }
                    }
                ]
            ]

        }


        // console.log(this.props);
    }

    render(){
        return(
            <Div panel={{class:"content"}} tag-role="Panel-Content-Div">
            {/* 由于加载的为同一模板，如果不添加exact属性，将导致运行加载两次页面 */}
                <Router tag-role="Router">
                    <Route path="/" exact component={Home}/>
                    <Route path="/Components" component={Components}/>
                    <Route path="/Forms" component={Forms}/>
                    <Route path="/Tables" component={Tables}/>
                    <Route path="/Notifications" component={Notifications}/>
                    <Route path="/Typography" component={Typography}/>
                    <Route path="/Icons" component={Icons} tag-role="Route-Icons"/>
                </Router>
            </Div>
        );
    }
}

export default Content;