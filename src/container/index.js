import React ,{ Component } from 'react';
import Login from '../components/Loginform';
import Main from '../components/main';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';

class SideBarContainer extends Component{
    render(){
        return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <Router>
           <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/dashboard" component={Main}></Route> 
           </Switch>
          </Router> 
        )
    }
}
export default SideBarContainer;