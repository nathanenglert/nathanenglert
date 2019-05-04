import React from 'react';

import './cellular.scss';

import CellularAutomata from './cellularAutomata';

class Cellular extends React.Component {
  constructor (props) {
    super(props);

    this.config = {
      options: {
        CHANCE_TO_START_ALIVE: 0.425, // how dense the initial grid is with living cells
        DRAW_SPEED: 120,
        LIMIT_BIRTH: 4, // the number of neighbours that cause a dead cell to become alive
        LIMIT_DEATH: 2, // the number of neighbours that cause a living cell to die
        NUMBER_OF_STEPS: 5 // the number of times we perform the simulation step
      },
      scale: 64
    }    

    this.state = {
      height: 1,
      width: 1
    }
  }

  componentDidMount () {    
    const h = Math.floor(window.innerHeight / this.config.scale)+1;
    const w = Math.floor(window.innerWidth / this.config.scale)+1;

    this.setState({
      height: h,
      width: w,
      canvasStyle: {
        height: (h*this.config.scale) + 'px',
        width: (w*this.config.scale) + 'px',
      }
    })

    this.generateMap(h, w);
  }

  drawMap = map => {
    let x = 0;
    let y = 0;
    const ctx = this.refs.canvas.getContext('2d');
  
    for (let i = 0; i < map.length; i += 1) {        
      this.drawPosition(ctx, map[i], x, y)
  
      x += 1;
  
      if (x === this.state.width) {
        x = 0;
        y += 1;
      }
    }
  }

  drawPosition = (ctx, pos, x, y) => {
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
  
    this.sendToCanvas(ctx, color, 1, 1, x, y);
  }
  
  sendToCanvas = (ctx, pixels, height, width, x, y) => {
    const array = new Uint8ClampedArray(pixels);
    const image = new ImageData(array, width, height);
  
    x = parseInt(x);
    y = parseInt(y);
    
    ctx.putImageData(image, x, y);        
  }

  generateMap (h, w) {
    CellularAutomata.generate(h, w, this.config.options, this.drawMap);      
  }

  render () {
    return (
      <div id="app"> 
          <canvas 
            ref="canvas"
            height={this.state.height}
            width={this.state.width}
            style={this.state.canvasStyle}>
          </canvas> 
      </div>    
    )
  }
}

export default Cellular;
