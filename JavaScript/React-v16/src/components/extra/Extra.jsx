import React from 'react';


export default class Extra extends React.Component{
    constructor(props){
        super(props);
        this.state={
            panel:{
                Modal:{}
            }
        }
    }


    render(){
        return(
            <div className="extra">
                <div className="modal fade" id="modalUpdate" tabIndex="-1" role="dialog" aria-labelledby="modalUpdatePro" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header bg-primary">
                                <h6 className="modal-title"><i className="la la-frown-o"></i> Under Development</h6>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">									
                                <p>Currently the pro version of the <b>Ready Dashboard</b> Bootstrap is in progress development</p>
                                <p>
                                    <b>We'll let you know when it's done</b></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}