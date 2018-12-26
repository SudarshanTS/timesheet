import React from 'react';
import Actions from './Actions'
import '../container/task.css'
const Task=()=>{
    return(
        <div className="employeeRegister">
           {/* <Actions/>             */}
       <table>
           <thead>
               <tr>
               <th>Task Id</th>
               <th>Project Id</th>
               <th>Task</th>
               <th>Start date</th>
               <th>End date</th>
               <th>Status</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                <td>01</td>
                <td>01</td>
                <td>add cards</td>
                <td>13/12/2018</td>
                <td>20/12/2018</td>
                <td>Pending</td>
               </tr>
               <tr>
                <td>01</td>
                <td>01</td>
                <td>add cards</td>
                <td>13/12/2018</td>
                <td>20/12/2018</td>
                <td>Pending</td>
               </tr>
               <tr>
                <td>01</td>
                <td>01</td>
                <td>add cards</td>
                <td>13/12/2018</td>
                <td>20/12/2018</td>
                <td>Pending</td>
               </tr>
               <tr>
                <td>01</td>
                <td>01</td>
                <td>add cards</td>
                <td>13/12/2018</td>
                <td>20/12/2018</td>
                <td>Pending</td>
               </tr>
               <tr>
                <td>01</td>
                <td>01</td>
                <td>add cards</td>
                <td>13/12/2018</td>
                <td>20/12/2018</td>
                <td>Pending</td>
               </tr>
           </tbody>
       </table>
       </div>
    )
}
export default Task;