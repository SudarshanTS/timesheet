import React from 'react';
import Employee from './components/Employee';
import Project from './components/Projects';
import Task from './components/Task';
import TimeSheet from './components/TimeSheet';
import Pending from './components/Pending';
import {
    Route,
    Switch,
  } from 'react-router-dom';
const Routes = (
    <Switch>
          <Route  exact path="/" component={Pending}/>
          <Route  exact path="/employee" component={Employee}/>
          <Route  exact path="/project" component={Project}/>
          <Route  exact path="/task" component={Task}/>
          <Route  exact path="/timesheet" component={TimeSheet}/>
          
    </Switch>
  );
  export default Routes