const STEP = 10
export const moveHandler = (coordinates) => {
  let retObj = coordinates;
  switch (coordinates.pressed) {
    case 'ArrowRight':
      coordinates.x += STEP;
      coordinates.direction = 'right';
      break;
    case 38:
      coordinates.y -= STEP;
      break;
    case 'ArrowLeft':
      coordinates.x -= STEP;
      coordinates.direction = 'left';
      break;
    case 40:
      coordinates.y += STEP;
      break;
    case 32:
      break;
    default:
      return;
  }
  return retObj
}