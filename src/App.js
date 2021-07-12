import './App.css';
//import logo from './logo.svg'
import React from 'react'
import CounterComponent from './components/ClickCounter'
import HoverComponent from './components/HoverCounter'


class App extends React.Component {


  render() {
    return (
      <div>
       <CounterComponent />
       <HoverComponent />
      </div>
    );
  }
}

export default App;