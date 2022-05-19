import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeWrapper from "./components/ThemeWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

root.render(
  <React.StrictMode>
    <ThemeWrapper colorModeContext={ColorModeContext}>
      <App colorModeContext={ColorModeContext} />
    </ThemeWrapper>
  </React.StrictMode>
);
