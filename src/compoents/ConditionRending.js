import { useState } from "react";

const ConditionRending = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message = "Please Login!";
  if (isLoggedIn) {
    message = "Welcome Usre";
  }
  function handleLogin() {
    setIsLoggedIn(true);
  }
  function handleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      {isLoggedIn && <p>Welcome Usre</p>}
      <p>{message}</p>
      <br />
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default ConditionRending;
