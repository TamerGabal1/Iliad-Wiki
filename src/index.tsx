import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import characters from './data/characters.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App characters={characters} />
  </React.StrictMode>
);
