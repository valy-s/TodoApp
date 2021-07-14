import { useState } from "react";
import Main from "./components/main/main.component";
import Login from "./components/login/login.component";
import "./App.css";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const onSuccess = () => {
    setLoggedIn(true);
  };

  const onFailure = (res) => {
    console.log(`[Login failed] res:`, res);
  };

  const logOutSuccess = () => {
    setLoggedIn(false);
  };
  return (
    <>
      {isLoggedIn ? (
        <Main onSuccess={logOutSuccess} />
      ) : (
        <Login onSuccess={onSuccess} onFailure={onFailure} />
      )}
    </>
  );
}

export default App;
