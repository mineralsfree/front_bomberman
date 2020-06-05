import React, {useState} from "react";
import {Sprite, Container, useApp} from "@inlet/react-pixi";

const image = 'assets/stoneBlock.png'

export const Block = (props) => {
  const [coordinates, setCoordinates] = useState({x: 100, y: 100});

  return (<Container x={coordinates.x} y={coordinates.y}>
    <Sprite
      image={image}
      scale={{x: 1, y: 1}}
    >
    </Sprite>
  </Container>)
}