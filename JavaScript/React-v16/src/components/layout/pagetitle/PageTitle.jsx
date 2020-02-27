import React,{Component} from 'react';

class PageTitle extends Component{
    constructor(props){
        super(props);
        this.state={
            pageTitle:"Page Title"
        }
        // console.log(this.props);
    }

    render(){
        return(
            // 三元运算符 判断加载page title
            <h4 className="page-title">
            {this.props.panel.title?this.props.panel.title:this.state.pageTitle}
            </h4>
        );
    }
}

export default PageTitle;