/* eslint-disable no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const listData = Array.from({ length: 10 }).map((_, i) => i);
  return (
    <div x-memo x-class="App">
      <header x-class="App-header">
        <img src={logo} x-class="App-logo" alt="logo" />
        <p x-for={(item, index) in listData}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          x-class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
