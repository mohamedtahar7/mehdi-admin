import { createContext, useState, useEffect } from "react";
export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
