/* eslint-disable no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';

const bar = true;
const foo = true;
const boo = true;

function WaterFall() {}
function App() {
  const listData = Array.from({ length: 10 }).map((_, i) => i);
  return (
    <div x-memo x-class="App" x-class="root">
      <header x-class="App-header">
        <img src={logo} x-class="App-logo" alt="logo" />

        {/* x-for loop */}
        <p x-for={(loopItem, loopIndex) in listData} key={loopIndex}>
          Edit <code>{loopItem}</code> and save to reload.
        </p>

        <p x-for={(item, index)in listData}>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p x-for={this.state.listData}>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p x-for>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* conditions */}
        <span x-elseif={true}></span>
        <span x-if={bspanr}></span>

        <span x-elseif={true}></span>
        <span x-elseif={bar}></span>

        <span x-else={boo}></span>

        <span x-else={foo}></span>

        <a
          x-class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* x-slot */}
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
