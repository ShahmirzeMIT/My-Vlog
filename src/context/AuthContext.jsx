import { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [count,setCount]=useState('')
  let contextData = {
	count,setCount
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
