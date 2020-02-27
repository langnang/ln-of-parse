import React,{Component} from 'react';
import Form from './form/Form';
import Ul from './ul/Ul';

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-header navbar-expand-lg">
                <div className="container-fluid">
                    <Form />
                    <Ul />
                </div>
            </nav>
        );
    }
}

export default Navbar;