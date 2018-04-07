import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './Courses';

class App extends Component {
  render() {

    let courses = [
      {name: 'Complete IOS Dev Course', price: 199},
      {name: 'Complete Bootstrap Course', price: 120},
      {name: 'Complete Front-End Developer Course', price: 199},
      {name: 'Complete HTML5/CSS3 Course', price: 50}      
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <Courses items={courses}/>
      </div>
    );
  }
}

export default App;
