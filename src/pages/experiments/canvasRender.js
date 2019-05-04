import React from 'react';

class CanvasRender extends React.Component {
  constructor (props) {    
    super(props);

    this.height = props.height;
    this.width = props.width;
    this.canvasStyle = {
      height: (props.height*props.scale) + 'px',
      width: (props.width*props.scale) + 'px',
    } 
  }

  drawMap = map => {
    let x = 0;
    let y = 0;
  
    for (let i = 0; i < map.length; i += 1) {        
      this.drawPosition(map[i], x, y)
  
      x += 1;
  
      if (x === this.width) {
        x = 0;
        y += 1;
      }
    }
  }

  drawPosition = (pos, x, y) => {
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
  
    this.sendToCanvas(color, 1, 1, x, y);
  }
  
  sendToCanvas = (pixels, height, width, x, y) => {
    const array = new Uint8ClampedArray(pixels);
    const image = new ImageData(array, width, height);
  
    x = parseInt(x);
    y = parseInt(y);
    
    this.context.putImageData(image, x, y);        
  }

  render () {
    return (
      <canvas 
        tabindex="1" 
        ref={(c) => this.context = c.getContext('2d')}
        height={this.height}
        width={this.width}
        style={this.canvasStyle}>
      </canvas> 
    );
  }
}

export default CanvasRender;

