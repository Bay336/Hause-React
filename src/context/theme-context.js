import { createContext, useContext } from 'react';

export const ThemeContext = createContext(undefined);

// Кастомный хук для удобного использования в компонентах
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
};

