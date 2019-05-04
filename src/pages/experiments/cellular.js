import React from 'react';

import './cellular.scss';

import CanvasRender from './canvasRender';
import CellularAutomata from './cellularAutomata';

class Cellular extends React.Component {
  constructor(props) {
    super(props);

    this._canvas = React.createRef();

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

    this.config.height = Math.floor(window.innerHeight / this.config.scale)+1;
    this.config.width = Math.floor(window.innerWidth / this.config.scale)+1;
  }

  componentDidMount () {
    this.generateMap();
  }

  generateMap () {
    CellularAutomata.generate(this.config.width, this.config.height, this.config.options, this._canvas.current.drawMap);      
  }

  render () {
    return (
      <div id="app">
          <CanvasRender 
            ref={this._canvas}
            height={this.config.height}
            scale={this.config.scale}
            width={this.config.width}>
          </CanvasRender>  
      </div>    
    )
  }
}

export default Cellular;
