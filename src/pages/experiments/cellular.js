import React from 'react';

import './cellular.scss';

import { initializeMap, drawMap } from './canvasRender';
import { generate } from './cellularAutomata';

class Cellular extends React.Component {
  constructor(props) {
    super(props);

    this.config = {
      height: 24,
      options: {
        CHANCE_TO_START_ALIVE: 0.425, // how dense the initial grid is with living cells
        DRAW_SPEED: 120,
        LIMIT_BIRTH: 4, // the number of neighbours that cause a dead cell to become alive
        LIMIT_DEATH: 2, // the number of neighbours that cause a living cell to die
        NUMBER_OF_STEPS: 5 // the number of times we perform the simulation step
      },
      scale: 64,
      width: 24
    }

    this.config.height = Math.floor(window.innerHeight / this.config.scale)+1;
    this.config.width = Math.floor(window.innerWidth / this.config.scale)+1;
  
    this.canvasStyle = {
      height: (this.config.height*this.config.scale) + 'px',
      width: (this.config.width*this.config.scale) + 'px',
    }  
  }

  componentDidMount () {
    initializeMap(this.context, this.config.width);

    this.generateMap();
  }

  generateMap () {
    return generate(this.config.width, this.config.height, this.config.options, drawMap);      
  }

  render () {
    return (
      <div id="app">
          <canvas 
            tabindex="1" 
            ref={(c) => this.context = c.getContext('2d')}
            height={this.config.height}
            width={this.config.width}
            style={this.canvasStyle}>
          </canvas>  
      </div>    
    )
  }
}

export default Cellular;
