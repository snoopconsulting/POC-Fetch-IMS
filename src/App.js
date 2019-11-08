import React from 'react';
import Login from './components/login/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login usuario={"sgc@snoopconsulting.com"} pass={"12345"}></Login>
    </div>
  );
}

export default App;
