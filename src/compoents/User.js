import { useState } from "react";

const User = () => {
  /*const [fristName, setFristName] = useState("One");
  const [lastName, setLastName] = useState("Number");
  const [email, setEmail] = useState("One@gmail.com");*/
  const [user, setUser] = useState({
    fristName: "One",
    lastName: "Number",
    email: "One@gmail.com",
  });
  function updateUser() {
    /* setFristName("Two");
    setLastName("Number");
    setEmail("Two@gmail.com");*/
    setUser({
      fristName: "Two",
      lastName: "Number",
      email: "Two@gmail.com",
    });
  }
  return (
    <div>
      <h1>User Detail</h1>
      <p>{user.fristName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default User;
