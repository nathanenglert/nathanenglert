import React from 'react';

import './cellular.scss';

const TYPE_WALL = 1;
const TYPE_FLOOR = 0;

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

    this.generateMap(h, w, this.config.options);
  }

  countAliveNeighbours = (map, x, y, width, height) => {
    let count = 0;

    for (let i = -1; i < 2; i += 1) {
        for (let j = -1; j < 2; j += 1) {
            const neighbourX = x + i;
            const neighbourY = y + j;

            if (i === 0 && j === 0) continue;

            if (neighbourX < 0 || neighbourY < 0 || 
                neighbourX >= width || neighbourY >= height || 
                map[neighbourX][neighbourY] === TYPE_WALL) {
                count += 1;
            }
        }
    }

    return count;
  }

  doSimulationStep = (oldMap, width, height, options) => {
      const newMap = [];

      for (let x = 0; x < width; x += 1) {
        newMap.push([]);

        for (var y = 0; y < height; y += 1) {
          let nbs = this.countAliveNeighbours(oldMap, x, y, width, height);

          if (oldMap[x][y] === TYPE_WALL) {
            let type = nbs >= options.LIMIT_DEATH ? TYPE_WALL : TYPE_FLOOR;
            newMap[x].push(type);
          } 
          else {
            let type = nbs > options.LIMIT_BIRTH ? TYPE_WALL : TYPE_FLOOR;
            newMap[x].push(type); 
          }
        }
      }

      return newMap;
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

  generateMap = (width, height, options) => {
    const m = this;

    let map = m.initialiseMap(width, height, options);
    let i = 0;
  
    let interval = setInterval(function () {
      map = m.doSimulationStep(map, width, height, options);
  
      let flatten = map.reduce((acc, val) => acc.concat(val), []);
      m.drawMap(flatten);
  
      i += 1;
      
      if (i === options.NUMBER_OF_STEPS)
        clearInterval(interval);
    }, options.DRAW_SPEED)
  
    // for (var i = 0; i < options.NUMBER_OF_STEPS; i++)
    // {
      
    // }
  
    // var flatten = map.reduce((acc, val) => acc.concat(val), []);
    // return flatten;
  }

  initialiseMap = (width, height, options) => {
    const map = [];

    for (let x = 0; x < width; x += 1) {
      map.push([]);

      for (let y = 0; y < height; y += 1) {
        let type = Math.random() < options.CHANCE_TO_START_ALIVE ? TYPE_WALL : TYPE_FLOOR;
        map[x].push(type);
      }
    }
    
    return map;
  }
  
  sendToCanvas = (ctx, pixels, height, width, x, y) => {
    const array = new Uint8ClampedArray(pixels);
    const image = new ImageData(array, width, height);
  
    x = parseInt(x);
    y = parseInt(y);
    
    ctx.putImageData(image, x, y);        
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
