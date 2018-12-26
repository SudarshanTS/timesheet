import React,{Component} from 'react';
import {withRouter} from 'react-router';
import Projectform from './Projectform';
class Actions extends Component{
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });

  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render(){
 return(
 <div>
<div className="Actions">
<button onClick={this.onOpenModal} className="formAddButton">ADD</button>
</div> 
{this.state.open?<Projectform open={this.state.open} onClose={this.onCloseModal}/>:""}
</div>  
 )
}
}
export default withRouter(Actions);