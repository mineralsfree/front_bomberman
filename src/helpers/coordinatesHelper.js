const STEP = 10
export const moveHandler = (coordinates) => {
  let retObj = coordinates;
  switch (coordinates.pressed) {
    case 'ArrowRight':
      coordinates.x += STEP;
      coordinates.direction = 'right';
      break;
    case 'ArrowUp':
      coordinates.y -= STEP;
      coordinates.direction = 'up';
      break;
    case 'ArrowLeft':
      coordinates.x -= STEP;
      coordinates.direction = 'left';
      break;
    case 'ArrowDown':
      coordinates.y += STEP;
      coordinates.direction = 'down';
      break;
    case 32:
      break;
    default:
      return;
  }
  return retObj
}