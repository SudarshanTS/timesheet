import React, { Component } from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Link,Route } from 'react-router-dom';
import Routes from '../routes';
import { ReactComponent as Search } from '../assets/utils/magnify.svg';
import { ReactComponent as Avatar } from '../assets/utils/account.svg';
import { ReactComponent as Arrowdown } from '../assets/utils/chevron-down.svg';
class Sidebar extends Component {
    render() {
        return (
            <Router>
                <div className="Main">
                    <div className="sideBar">
                        <div className="employeeLoginContainer">
                            <h1 style={{ paddingLeft: "30px",color:"white" }}>Timesheet</h1>
                            <div className="userProfile">
                                <div className="userProfileImg"><Avatar style={{fill:"white"}}/></div>
                                <p style={{color:"white"}}>Sudarshan</p>
                                <div><Arrowdown style={{fill:"white",cursor:"pointer"}}/></div>
                            </div>
                        </div>
                        <div className="menuBar">
                            <ul>
                                <li><Link to="/" >Pending Items</Link></li>
                                <li><Link to="/employee">Employee</Link></li>
                                <li><Link to="/project">Projects</Link></li>
                                <li><Link to="/task">Task</Link></li>
                                <li><Link to="/timesheet">Timehseet</Link></li>
                                
                            </ul>
                            <div className="searchBox">
                                <input type="text" name="search" className="searchInput" placeholder="Search..." autoFocus />
                                <div className="searchIcon"><Search style={{ fill: "#383434" }} /></div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ width: "95%", margin: "10px auto" }}>
                       {Routes}
                    </div>
                </div>
            </Router>
        )
    }
}
export default Sidebar; 