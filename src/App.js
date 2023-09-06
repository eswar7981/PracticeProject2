import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  

  useEffect(() => { const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  if (storedUserLoggedInInformation === "1") {
    setIsLoggedIn(true);
  }}, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password,college) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem(`${email} ${password} ${college}`, "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
        <Context.Provider value={{isLoggedIn:isLoggedIn}}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </Context.Provider>
    
  );
}

export default App;
