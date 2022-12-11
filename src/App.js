import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Router from './Router'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
