import React,{Component} from 'react';
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
            {
                this.props.panel.header?(
                    <div className="card-header">
                        <h4 className="card-title">{this.props.panel.header.title}</h4>
                        <p className="card-category">{this.props.panel.header.category}</p>
                    </div>
                ):""
            }
            {

                this.props.panel.body?(
                    <div className="card-body">
                    
                    </div>
                ):""
            }
            {
                this.props.panel.stats?(
                    <Stats panel={this.props.panel.stats}/>
                ):""
            }
            {
                this.props.panel.footer?(
                    <div className="card-footer">
                    
                    </div>
                ):""

            }
            </div>
        );
    }
}

export default Card;