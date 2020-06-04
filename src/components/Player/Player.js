import React, {useCallback, useEffect, useState} from "react";
import {PixiComponent, Container, useApp} from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import {moveHandler} from "../../helpers/coordinatesHelper";

let spritesheets = {left: 'assets/spritesheetLeft.json', right: 'assets/spritesheetRight.json', up: 'assets/spritesheetUp.json', down:'assets/spritesheetDown.json'}
const tick = 50;
export const Player = () => {
  const [coordinates, setCoordinates] = useState({x: 250, y: 250, direction: 'left', frames: [], pressed: ''})
  const handleUserKeyPress = (e) => (coordinates.pressed !== e.key) ? (setCoordinates({
    ...coordinates,
    pressed: e.key
  })) : (() => {
  });
  const handleUserKeyUnPress = (e) => setCoordinates({...coordinates, pressed: ''})
  useEffect(() => {
      const timeOut = setTimeout(() => {
        if (coordinates.pressed !== '')
          setCoordinates({...coordinates, ...moveHandler(coordinates)})
      }, tick);
      return () => clearTimeout(timeOut)
    }
  )
  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    window.addEventListener('keyup', handleUserKeyUnPress)
    return () => {
      window.removeEventListener('keyup', handleUserKeyUnPress);
      window.removeEventListener('keydown', handleUserKeyPress);
    }
  }, [handleUserKeyPress])
  const AnimatedSprit = PixiComponent('AnimatedSprit', {
    create: props => {
      return new PIXI.AnimatedSprite(props.textures)
    },
    applyProps: (instance, oldProps, newProps) => {
      instance.animationSpeed = newProps.animationSpeed;
      instance.textures = newProps.textures;
      if (newProps.pressed===''){
        instance.gotoAndPlay(0);
        instance.animationSpeed = 0;
      }
      instance.gotoAndPlay(0);
    }
  })
  const app = useApp();
  React.useEffect(() => {
    app.loader.add(Object.values(spritesheets)).load((_, resource) => {
      setCoordinates((state) => {
          return {
            ...state,
            frames: Object.keys(resource[spritesheets[coordinates.direction]].data.frames).map(frame =>
              PIXI.Texture.from(frame)
            )
          }
        }
      );
    });
  }, [spritesheets]);
  React.useEffect(() => {
      if (coordinates.frames.length > 0)
        setCoordinates({
          ...coordinates,
          frames: Object.keys(app.loader.resources[spritesheets[coordinates.direction]].data.frames).map(frame => PIXI.Texture.from(frame))
        })
    }
    , [coordinates.direction])
  if (coordinates.frames.length === 0) {
    return null;
  }
  return (
    <Container x={coordinates.x} y={coordinates.y}>
      <AnimatedSprit
        animationSpeed={0.3}
        initialFrame={0}
        pressed={coordinates.pressed}
        textures={coordinates.frames}
        anchor={1}
      />
    </Container>
  );

}