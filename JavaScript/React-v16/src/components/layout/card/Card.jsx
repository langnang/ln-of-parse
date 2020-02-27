import React,{Component} from 'react';

import CardHeader from './header/CardHeader';
import CardBody from './body/CardBody';
import CardFooter from './footer/CardFooter';


import Stats from './stats/Stats';


class Card extends Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state={
            panel:{
                bg:"",
                stats:{},
                header:{},
                body:{},
                footer:{}
            }
        }
    }
    render(){
        return(
            <div className={[
                'card',
                this.props.panel.stats?"card-stats":"",
                this.props.panel.bg?("card-"+this.props.panel.bg):""
            ].join(" ")}>

            {/* card header */}
            {
                this.props.panel.header?(
                    <CardHeader panel={this.props.panel.header}/>
                ):""
            }

            {/* card body */}
            {

                this.props.panel.body?(
                    <CardBody panel={this.props.panel.body} />
                ):""
            }
                                {/* {
                        this.props.panel.body.icons?(
                            <Icons panel={this.props.panel.body.icons}/>
                        ):""
                    }
                    {
                        this.props.panel.body.btnGroup?(
                            <BtnGroup panel={this.props.panel.body.btnGroup}/>
                        ):""
                    }
                    {
                        this.props.panel.body.checkboxGroup?(
                            <CheckboxGroup panel={this.props.panel.body.checkboxGroup}/>
                        ):""
                    }
                    {
                        this.props.panel.body.radioGroup?(
                            <RadioGroup panel={this.props.panel.body.radioGroup}/>
                        ):""
                    }
                    {
                        this.props.panel.body.switchGroup?(
                            <SwitchGroup panel={this.props.panel.body.switchGroup}/>
                        ):""
                    } */}
            {
                this.props.panel.stats?(
                    <Stats panel={this.props.panel.stats}/>
                ):""
            }

            {/* card footer */}
            {
                this.props.panel.footer?(
                    <CardFooter panel={this.props.panel.footer}/>
                ):""
            }
            
            </div>
        );
    }
}

export default Card;