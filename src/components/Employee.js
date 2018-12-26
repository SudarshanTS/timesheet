import React from 'react';
import '../container/Employee.css';
import Actions from './Actions';
const Employee=()=>{
    return(
        <div className="employeeRegister">
        {/* <Actions/>                        */}
       <table>
       
           <thead>
               <tr>
               <th>Employee Id</th>
               <th>Company Id</th>
               <th>Roles Id</th>
               <th>Employee Name</th>
               <th>Email Id</th>
               <th>PhoneNumber</th>
               <th>Address</th>
               <th>ProfileImage</th>
               <th>Password</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>10</td>
                   <td>02</td>
                   <td>05</td>
                   <td>sudarshan</td>
                   <td>s@gmail.com</td>
                   <td>8056544180</td>
                   <td>chn</td>
                   <td></td>
                   <td>*******</td>
               </tr>
               <tr>
                   <td>10</td>
                   <td>02</td>
                   <td>05</td>
                   <td>abishek</td>
                   <td>s@gmail.com</td>
                   <td>123456789</td>
                   <td>chn</td>
                   <td></td>
                   <td>*******</td>
               </tr>
               <tr>
                   <td>10</td>
                   <td>02</td>
                   <td>05</td>
                   <td>sid</td>
                   <td>s@gmail.com</td>
                   <td>987654321</td>
                   <td>chn</td>
                   <td></td>
                   <td>*******</td>
               </tr>
               <tr>
                   <td>10</td>
                   <td>02</td>
                   <td>05</td>
                   <td>ram</td>
                   <td>s@gmail.com</td>
                   <td>1234567890</td>
                   <td>chn</td>
                   <td></td>
                   <td>*******</td>
               </tr>
               
           </tbody>
       </table>
       </div> 
    )
}
export default Employee;