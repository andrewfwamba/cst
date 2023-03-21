import { createContext, useEffect, useState } from "react";

export const userContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginPending, setLoginPending] = useState(false);

  const fetchUser = async () => {
    setLoginPending(true);
    const userData = await localStorage.getItem("user");
    let user = JSON.parse(userData);
    setUser(user);
    console.log(user);
    if (userData !== null) {
      setLoggedIn(true);
      setLoginPending(false);
    } else {
      setLoggedIn(false);
      setLoginPending(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <userContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        loginPending,
        setLoginPending,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export const useLogin = () => userContext(userContext);
export default LoginProvider;
