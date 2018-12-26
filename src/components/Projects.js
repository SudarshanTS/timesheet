import React, { Component } from 'react';
import Actions from './Actions';
import { connect } from 'react-redux';
class Project extends Component {



    render() {
        let  rows  = this.props.states;
        return (
            <div className="employeeRegister">
                <Actions />
                <table>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Company Name</th>
                            <th>Description Name</th>
                            <th>Estimation Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(tablerows => {
                            return (
                                <tr key={Math.random()}>
                                    <td>{tablerows.projectname}</td>
                                    <td>{tablerows.companyname}</td>
                                    <td>{tablerows.description}</td>
                                    <td>{tablerows.estimationcost}</td>
                                    <td>
                                        <button onClick={() => this.props.handleEdit()}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { states: state.rows }
}
export default connect(mapStateToProps)(Project);