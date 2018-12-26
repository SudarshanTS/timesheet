import React from 'react';
import Actions from './Actions'
const Company = () => {
    return (
         <div className="employeeRegister">
             <Actions/>            
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Company Id</th>
                        <th>Company Name</th>
                        <th>Email Id</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div contentEditable /></td>
                        <td><div contentEditable /></td>
                        <td><div contentEditable /></td>
                        <td><div contentEditable /></td>
                        <td><div contentEditable /></td>
                        <td><div contentEditable /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Company;