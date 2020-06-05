import React, {useCallback, useEffect, useState} from 'react';
import './App.css';

import {Stage,} from '@inlet/react-pixi';
import {Player} from "./components/Player/Player";
import {Background} from "./components/Background/Background";
import {Block} from "./components/Block/Block";

const [width, height] = [640, 480];


const App = () => {


  return (
    <Stage width={width} height={height}>
      <Background/>
      <Block/>
      <Player/>
    </Stage>
  );
}
export default App;
