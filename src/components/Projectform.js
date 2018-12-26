import React, { Component } from 'react';
import '../container/Projectform.css';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { Actions } from '../Store/Action';
class Projectform extends Component {
  render() {
    return (
      <div>
        <Modal open={this.props.open} onClose={this.props.onClose} center>
          <div className="EmployeeProjectBox">
            <form>
              <input type="text" placeholder="Project name" onChange={(e) => this.props.handleChange(e.target.value, "projectname")} />
              <input type="text" placeholder="Company name" onChange={(e) => this.props.handleChange(e.target.value, "companyname")} />
              <input type="text" placeholder="Description name" onChange={(e) => this.props.handleChange(e.target.value, "description")} />
              <input type="text" placeholder="Estimation cost" onChange={(e) => this.props.handleChange(e.target.value, "estimationcost")} />
            </form>
            <div className="Actions">
              <button className="formAddButton" style={{ background: "blue" }} onClick={this.props.onSave} >Save</button>
              <button className="formAddButton" style={{ background: "lightgrey" }} onClick={this.props.onClose}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    rows: state.rows,
    projectformvalue: {
      projectname: state.projectname,
    }
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    handleChange: (value, name) => dispatch({ type: 'CHANGE', payload: { 'value': value, 'name': name } }),
    onSave: () => dispatch({ type: 'SAVE' }),
    onCancel: () => dispatch({ type: 'Cancel' }),
  }
}
export default connect(mapStateProps, mapDisptachToProps)(Projectform);