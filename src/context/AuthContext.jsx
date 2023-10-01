
import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [sentId,setSentId]=useState()
  let contextData = {
    sentId,
    setSentId
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
