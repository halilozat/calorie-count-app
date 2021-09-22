import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import { FoodContextProvider } from './context/foodContext/FoodContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FoodContextProvider>
        <App />
      </FoodContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
