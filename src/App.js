import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Navigation from './components/Navigation';
import Router from './Router'
import store from './redux/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
