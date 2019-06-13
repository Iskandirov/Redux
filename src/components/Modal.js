import React, { Component } from 'react';

class Modal extends Component {
    state = {}
    render() {
        console.log('----modal props-----', this.props);
        return (
            <div className="modal" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.props.callBackClose()} >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;