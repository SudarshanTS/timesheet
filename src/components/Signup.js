import React,{Component} from 'react';
import Modal from 'react-responsive-modal';
class Signup extends Component{
    render(){        
    return (
      <div>
           <Modal  open={this.props.open} onClose={this.props.onClose}center>
            <h1>Hi</h1>
      </Modal>
      </div>
    )    
        }
    }    
export default Signup;