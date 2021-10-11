import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** Styles */
import './index.css';

/** Contexts */
import { AuthContextProvider } from './context/authContext/AuthContext'
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
