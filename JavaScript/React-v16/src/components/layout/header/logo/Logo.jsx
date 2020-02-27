import React,{Component} from 'react';

class Logo extends Component{
	constructor(props){
		super(props);
		this.state={
			panel:{
				link:"/",
				title:"Title"
			}
		};
		// console.log(props);
	}
    render(){
        return (
            <div className="logo-header">
				<a
					href={
						this.props.panel.link
					}
					className="logo"
				>
					{this.props.panel.title?this.props.panel.title:this.state.panel.title}
				</a>
				<button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<button className="topbar-toggler more">
					<i className="la la-ellipsis-v"></i>
				</button>
			</div>
        );
    }
}

export default Logo;