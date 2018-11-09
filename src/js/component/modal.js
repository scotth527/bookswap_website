import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import { SignUp } from './components/signup.jsx';
import { LogIn } from './components/login.jsx';

class Modal extends React.Component{
    constructor(){
        super();
        this.state = {
            signup:'',
            login:'',
        };
    }
    
    render(){
        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{display: (this.props.show) ? 'inline-block' : 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>
                            { (this.props.onClose) ?
                                <button onClick={() => this.props.onClose()} type="button" className="signup" data-dismiss="modal" aria-label="Sign Up">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                :''
                            }
                            <h5 className="modal-title">Log In</h5>
                            { (this.props.onClose) ?
                                <button onClick={() => this.props.onClose()} type="button" className="login" data-dismiss="modal" aria-label="Log In">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                :''
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
Modal.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool
};

Modal.defaultProps = {
  show: false,
  onClose: null
};
export default withRouter(Modal);
    
    