const TYPE_WALL = 1;
const TYPE_FLOOR = 0;

const countAliveNeighbours = (map, x, y, width, height) => {
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

const doSimulationStep = (oldMap, width, height, options) => {
    const newMap = [];

    for (let x = 0; x < width; x += 1) {
      newMap.push([]);

      for (var y = 0; y < height; y += 1) {
        let nbs = countAliveNeighbours(oldMap, x, y, width, height);

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

const initialiseMap = (width, height, options) => {
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

exports.generate = (width, height, options, drawFn) => {
  let map = initialiseMap(width, height, options);
  let i = 0;

  let interval = setInterval(function () {
    map = doSimulationStep(map, width, height, options);

    let flatten = map.reduce((acc, val) => acc.concat(val), []);
    drawFn(flatten);

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