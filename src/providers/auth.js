import { createContext, useContext, useEffect, useState } from 'react';
import client from './api';

const Context = createContext({
  accessToken: '',
  refreshToken: '',
  user: null,
  login: (data) => {},
  logout: () => {},
});

export const useAuth = () => useContext(Context);
const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refreshToken'),
  );

  const refreshUser = async () => {
    try {
      const response = await client.post('/api/refresh-token', {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });
      localStorage.setItem(
        'refreshToken',
        response.data.newTokens.refreshToken,
      );
    } catch (error) {
      logout();
    }
  };

  const login = async (token) => {
    try {
      setAccessToken(token.accessToken);
      setRefreshToken(token.refreshToken);
      localStorage.setItem('token', token.accessToken);
      localStorage.setItem('refreshToken', token.refreshToken);
    } catch (error) {
      logout();
    }
  };

  const logout = () => {
    setAccessToken('');
  };

  useEffect(() => {
    if (accessToken) {
      refreshUser();
    }
  });

  return (
    <Context.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export default AuthProvider;
