let _context, _width;  

const drawPosition = (pos, x, y) => {
  var color = [];

  switch (pos) {
    case 0:
      color = [255, 255, 255, 255];
      break;
    case 1:
      color = [0, 0, 0, 255];
      break;
    case 10:
      color = [0, 255, 0, 255]
      break;
    case 20:
      color = [255, 0, 0, 255]
      break;
    default:
      color = [255, 255, 255, 255];
      break;
  }

  sendToCanvas(color, 1, 1, x, y);
}

const sendToCanvas = (pixels, height, width, x, y) => {
  const array = new Uint8ClampedArray(pixels);
  const image = new ImageData(array, width, height);

  x = parseInt(x);
  y = parseInt(y);
  
  _context.putImageData(image, x, y);        
}

exports.drawMap = map => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < map.length; i += 1) {        
    drawPosition(map[i], x, y)

    x += 1;

    if (x === _width) {
      x = 0;
      y += 1;
    }
  }
}

exports.initializeMap = (context, width) => {
  _context = context;
  _width = width;
}

