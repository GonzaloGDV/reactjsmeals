import React, { useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const fetchData = async () => {
  try {
    const data = await axios.get('https://randomuser.me/api/');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const AppProvider = ({ children }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ name: 'Gonza', age: 49 }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
