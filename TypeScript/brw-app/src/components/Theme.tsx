import { createContext, useContext } from "react";

type Theme = 'light' | 'dark';

const ThemedContext = createContext<Theme>('light');

const Theme = () => {
  const theme = useContext(ThemedContext);
  return <div className={`theme-${theme}`}>Theme: {theme}</div>;
};

export default Theme;