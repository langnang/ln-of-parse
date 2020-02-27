import React,{Component} from 'react';

class PageTitle extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            pageTitle:"Page Title"
        }
    }

    render(){
        return(
            // 三元运算符 判断加载page title
            <h4 className="page-title">
            {this.props.title?this.props.title:this.state.pageTitle}
            </h4>
        );
    }
}

export default PageTitle;