import React, { Component } from 'react';
import '../container/loginform.css'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ReactComponent as LoginIcon } from '../assets/utils/login.svg';
import Signup from './Signup';
class Login extends Component {
    state = {
        open: false,
      };
    
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        return (
            <div className="loginBoxContainer">
                <div className="loginbox">
                    <h1>Login <span><LoginIcon style={{ fill: "black" }} /></span></h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" /><br />
                        <div className="forgetPwd"><a href="" >Forget password?</a></div><br />
                        <div className="loginButton" ><Link to="/dashboard">LOG IN</Link></div><br />
                        <p style={{ color: "black" }}>Don't have an account?</p><br />
                        <div className="signButton" onClick={this.onOpenModal}>SIGN  UP</div>
                    </form>
                </div>
                  <Signup open={this.state.open} onClose={this.onCloseModal}/>
            </div>
        )
    }
}
export default withRouter(Login);