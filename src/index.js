import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeWrapper from "./components/ThemeWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

root.render(
    <ThemeWrapper colorModeContext={ColorModeContext}>
      <App colorModeContext={ColorModeContext} />
    </ThemeWrapper>
);
