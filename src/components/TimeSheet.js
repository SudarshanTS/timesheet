import React from 'react';
import Actions from './Actions';
const Timesheet=()=>{
    return(
        <div className="employeeRegister">
           {/* <Actions/>             */}
       <table>
           <thead>
               <tr>
               <th>TimesheetId</th>   
               <th>TaskId</th>
               <th>ProjectId</th>
               <th>EmployeeId</th>
               <th>Date</th>
               <th>ActualEffort</th>
               <th>Activity</th>
               </tr>
           </thead>
           <tbody>
               <tr>
               <td><div contentEditable/></td>
                <td><div contentEditable/></td>
                <td><div contentEditable/></td>
                <td><div contentEditable/></td>
                <td><div contentEditable/></td>
                <td><div contentEditable/></td>
                <td><div contentEditable/></td>
               </tr>
           </tbody>
       </table>
       </div>
    )
}
export default Timesheet;