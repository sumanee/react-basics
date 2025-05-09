import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fristName: "One",
      lastName: "Number",
      email: "One@gmail.com",
    };
  }
  updateEmployee() {
    this.setState({
      fristName: "Two",
      lastName: "Number",
      email: "Two@gmail.com",
    });
  }

  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        <p>{this.state.fristName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <button onClick={() => this.updateEmployee()}>Update Employee</button>
      </div>
    );
  }
}

export default Employee;
