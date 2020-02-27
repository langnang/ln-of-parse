import React from 'react';
import $ from 'jquery'

export default class Components extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="container-fluid">
                <h4 className="page-title">Component</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Button Original</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <button className="btn btn-default">Default</button>

                                    <button className="btn btn-primary">Primary</button>

                                    <button className="btn btn-info">Info</button>

                                    <button className="btn btn-success">Success</button>

                                    <button className="btn btn-warning">Warning</button>

                                    <button className="btn btn-danger">Danger</button>

                                    <button className="btn btn-link">Link</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Disabled Button</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <button className="btn btn-default" disabled="disabled">Default</button>

                                    <button className="btn btn-primary" disabled="disabled">Primary</button>

                                    <button className="btn btn-info" disabled="disabled">Info</button>

                                    <button className="btn btn-success" disabled="disabled">Success</button>

                                    <button className="btn btn-warning" disabled="disabled">Warning</button>

                                    <button className="btn btn-danger" disabled="disabled">Danger</button>

                                    <button className="btn btn-link" disabled>Link</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Button Size</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <button className="btn btn-primary btn-lg">Large</button>

                                    <button className="btn btn-primary">Normal</button>

                                    <button className="btn btn-primary btn-sm">Small</button>

                                    <button className="btn btn-primary btn-xs">Extra Small</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Button Type</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <button className="btn btn-primary">Normal</button>
                                    <button className="btn btn-primary btn-border">Border</button>

                                    <button className="btn btn-primary btn-round">Round</button>

                                    <button className="btn btn-primary btn-border btn-round">Round</button>

                                    <button className="btn btn-primary btn-link">Link</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Checkbox</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        <span className="form-check-sign">Unchecked</span>
                                    </label>

                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" defaultChecked/>
                                        <span className="form-check-sign">Checked</span>
                                    </label>

                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" disabled/>
                                        <span className="form-check-sign">Disabled</span>
                                    </label>

                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" defaultChecked disabled/>
                                        <span className="form-check-sign">Checked Disabled</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Radio</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <label className="form-radio-label">
                                        <input className="form-radio-input" type="radio" name="optionsRadios" value=""/>
                                        <span className="form-radio-sign">Unchecked</span>
                                    </label>
                                    <label className="form-radio-label">
                                        <input className="form-radio-input" type="radio" name="optionsRadios" value="" defaultChecked/>
                                        <span className="form-radio-sign">Checked</span>
                                    </label>
                                    <label className="form-radio-label">
                                        <input className="form-radio-input" type="radio" value="" disabled/>
                                        <span className="form-radio-sign">Disabled</span>
                                    </label>
                                    <label className="form-radio-label">
                                        <input className="form-radio-input" type="radio" value="" defaultChecked disabled/>
                                        <span className="form-radio-sign">Checked Disabled</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Bootstrap Switch</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="default"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="info"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="warning"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="danger"/>
                                </p>
                                <p className="demo">
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="default" data-style="btn-round"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="primary" data-style="btn-round"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="success" data-style="btn-round"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="info" data-style="btn-round"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="warning" data-style="btn-round"/>
                                    <input type="checkbox" defaultChecked data-toggle="toggle" data-onstyle="danger" data-style="btn-round"/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Bootstrap Dropdown</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <div className="dropdown">

                                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">

                                            Dropdown

                                        </button>

                                        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <p className="dropdown-divider"></p>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </ul>

                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Progress Bar</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="demo">
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </p>
                                        <p className="demo">
                                            <div className="progress">
                                                <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </p>
                                        <p className="demo">
                                            <div className="progress">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </p>
                                        <p className="demo">
                                            <div className="progress">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Bootstrap Input</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">

                                                <input type="text" value="" placeholder="Input" className="form-control" />

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group has-success">

                                                <input type="text" value="Success" className="form-control" />

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group has-error has-feedback">

                                                <input type="text" value="Error" className="form-control" />

                                                <span className="la la-times form-control-feedback"></span>

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="input-group has-icon">

                                                    <input type="text" value="Group Addon" className="form-control"/>

                                                    <div className="input-group-append">
                                                        <span className="input-group-text input-group-icon"><i className="la la-keyboard-o"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Nav Pills</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-pills nav-primary">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Pagination</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <p className="demo">
                                    <ul className="pagination pg-primary">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Slider</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <div className="demo">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div id="slider" className="slider-primary"></div>

                                            <div id="slider-range" className="slider-success"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Badge</h4>
                                <p className="card-category">Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <span className="badge badge-count">Count</span>
                                <span className="badge badge-default">Default</span>
                                <span className="badge badge-primary">Primary</span>
                                <span className="badge badge-info">Info</span>
                                <span className="badge badge-success">Success</span>
                                <span className="badge badge-warning">Warning</span>
                                <span className="badge badge-danger">Danger</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        $("[tag-role='Sidebar-Nav-Ul']>li").eq(1).addClass("active")

    }
}