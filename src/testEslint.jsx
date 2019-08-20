/* eslint-disable no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function WaterFall() {}
function App() {
  const listData = Array.from({ length: 10 }).map((_, i) => i);
  return (
    <div x-memo x-class="App" x-class="root">
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

        <WaterFall>
          <view x-slot:header>header1</view>
          <view x-slot:item="props">item: {props.item}</view>
          <view x-slot:header>header2</view>
        </WaterFall>
      </header>
    </div>
  );
}

export default App;
