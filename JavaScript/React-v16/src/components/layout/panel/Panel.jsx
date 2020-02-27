import React,{Component} from 'react';

import Content from './content/Content';
import Footer from './footer/Footer';

import Div from './../../tags/Div';
import Children from '../../tags/children/Children';

class Panel extends Component{
    constructor(props){
        super(props);
        this.state={
            panel:{
                parent:{
                    class:"main-panel"
                }
            },
            content:{

            },
            footer:{
                
            }
        };
        // console.log(this.props);
    }
    render(){
        return(
            <Div panel={this.state.panel.parent} tag-role="Panel-Div">
                <Content tag-role="Panel-Content">
                    {
                        this.props.children?
                        (
                            <Children
                            panel={this.props.children}
                            tag-role="Panel-Content-Children"
                        />
                        ):
                        null
                    }
                </Content>
                <Footer tag-role="Panel-Footer"/>
            </Div>
        );
    }
}


export default Panel;