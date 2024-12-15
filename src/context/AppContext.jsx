import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Christina S',
    username: 'kris',
    profilePicture: 'https://www.artguru.ai/_next/image/?url=https%3A%2F%2Fimg.artguru-cdn.com%2Fimage%2Faigc%2F6ae75db857ae39839c39c49ce9c058f5_1024_1024.webp&w=1080&q=100',
  });
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
