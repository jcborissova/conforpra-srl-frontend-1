import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import config from '../config';

axios.defaults.baseURL = config.apiUrl;

const Context = createContext({
  accessToken: '',
  refreshToken: '',
  login: (data) => {},
  logout: () => {},
});

export const useAuth = () => useContext(Context);

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refreshToken'),
  );

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

  const refreshUser = async () => {
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
      const response = await axios.post('/api/refresh-token');
      localStorage.setItem(
        'refreshToken',
        response.data.newTokens.refreshToken,
      );
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
  }, [refreshToken]);

  return (
    <Context.Provider value={{ accessToken, refreshToken, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export default AuthProvider;
