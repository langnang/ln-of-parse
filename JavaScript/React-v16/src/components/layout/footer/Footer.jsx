import React from 'react';


export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    ThemeKita
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Help
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#license/#free-item">
                                    Licenses
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright ml-auto">
                        2018, made with <i className="la la-heart heart text-danger"></i> by <a href="/">ThemeKita</a> - More Templates <a href="http://www.cssmoban.com/" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板">网页模板</a></div>				
                </div>
            </footer>
        )
    }
}