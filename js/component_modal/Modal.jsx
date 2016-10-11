import React, {Component} from 'react';


class Modal extends Component{
    render(){
        var selected = this.props.selected;
        return <div className="modal-container">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal" disabled={!selected}>
                    Check the comment!
                </button>
                <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="modalLabel">Your comment is</h4>
                            </div>
                            <div className="modal-body">
                                {selected &&
                                    <article>
                                        <h2 className="text-center">{this.props.selected.title}</h2>
                                        <p className="lead">{this.props.selected.body}</p>
                                    </article>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

export default Modal;
