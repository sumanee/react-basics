import React from "react";

const HelloWorld = () => {
  // const myElement = <div><h1>Hello World</h1></div>;
  // return myElement;
  /*
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello world")
  ); */
  function handleClick() {
    alert("handleClick");
  }
  const name = "Kuuipo";
  const addition = 1 + 2;
  return (
    <>
      <h1 className="title">Title</h1>
      <h2>Sub Title</h2>
      <p>Paragrah</p>
      <p>{name}</p>
      <p>{addition}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default HelloWorld;
