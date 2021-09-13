import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [macros, setMacros] = useState({
    carb: 200,
    protein: 100,
    fat: 50,
  });

  return (
    <div>
      <Header macros={macros} />
    </div>
  );
}

export default App;
