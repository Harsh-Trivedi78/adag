import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogin = (username) => {
    localStorage.setItem('loggedInUser', username);
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
