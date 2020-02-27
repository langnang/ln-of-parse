import React,{Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            header:{
                show:true
            },
            body:{
                show:true
            },
            footer:{
                show:true
            }
        }
    }
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    
                </div>
                <div className="card-body">

                </div>
                <div className="card-body">

                </div>
            </div>
        );
    }
}

export default Card;