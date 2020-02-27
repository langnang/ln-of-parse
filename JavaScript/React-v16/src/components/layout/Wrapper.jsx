import React,{Component} from 'react';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Panel from './panel/Panel';
import HomePageData from './../../pages/home.json';
import LayoutPageData from './../../pages/layout.json';

class Wrapper extends Component{
    constructor(props){
        super(props);
        this.state={
            panel:{

            }
        };
        console.log(LayoutPageData);
        console.log(this.props);
        console.log(this.props.location.pathname);
        switch(this.props.location.pathname){
            case "/":
            this.state.panel=LayoutPageData.Content["Home"];
            break;
            default:
            console.log(LayoutPageData.Content[this.props.location.pathname.slice(1)])
            if(LayoutPageData.Content[this.props.location.pathname.slice(1)]!==undefined){
                this.state.panel=LayoutPageData.Content[this.props.location.pathname.slice(1)];
            }else{
                this.state.panel=LayoutPageData.Content["Home"];
            }
            break;
        }

        console.log(this.state.panel);

        LayoutPageData.Sidebar.Nav.items[this.state.panel.sidebar].active=true;
    }

    render(){
        return (
            <div className="wrapper">
            <Header panel={LayoutPageData.Header}/>
            <Sidebar panel={LayoutPageData.Sidebar} />
            <Panel/>
            </div>
        )
    }

}

export default Wrapper;