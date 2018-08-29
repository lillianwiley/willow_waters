import React, { Component } from 'react';
import Home from './components/Home/Home';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
