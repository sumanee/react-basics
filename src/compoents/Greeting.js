import React from "react";

class Greeting extends React.Component {
  render(name) {
    return (
      <div>
        <h1>Welcome, Hi Class {name} </h1>
        <h1>Welcome, Hi Class {this.props.name} </h1>
      </div>
    );
  }
}

export default Greeting;
