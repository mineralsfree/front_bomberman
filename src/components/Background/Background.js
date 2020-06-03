import React from "react";
import {Sprite, Container, useApp} from "@inlet/react-pixi";
import * as PIXI from "pixi.js";

const image = 'assets/FIELD9.png'

export const Background = () => {
  return (<Container width={640} height={480}>
    <Sprite
      image={image}
      scale={{x: 1, y: 1}}
    >


    </Sprite>
  </Container>)
}