import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from './withRouter';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props) 

            this.state = {
                id: this.props.params.id,
                employee: {}
            }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b>Employee First Name:</b></label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Employee Last Name:</b></label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> <b>Employee Email ID:</b></label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                        <br></br>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(ViewEmployeeComponent);