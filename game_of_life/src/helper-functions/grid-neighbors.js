/* Get the 8 closest neighbors of a cell in a 2D grid when flattened to a 1D array */

(function () {
  const getNeighbors = (cell, width, height) => {
    cell = parseInt(cell);
    width = parseInt(width);
    height = parseInt(height);

    const SIZE = width * height; // Total cells

    if (SIZE < 9)
      return new Error(
        `grid-neighbors: Minimum grid size is 9 cells. Provided grid is ${SIZE} cells.`
      );
    if (cell >= SIZE)
      return new Error(
        `grid-neighbors: Cell reference "${cell}" out of bounds. Maximum reference is ${
          SIZE - 1
        }.`
      );

    // Setup
    const LC = Math.floor(cell / width) * width; // left most cell
    const RC = LC + width - 1; // right most cell
    const SIZE_MINUS_WIDTH = SIZE - width;
    const CELL_MINUS_WIDTH = cell - width;
    const CELL_PLUS_WIDTH = cell + width;
    const CELL_MOD_WIDTH = cell % width;
    const TOP_RIGHT = width - 1;
    const BOTTOM_RIGHT = SIZE - 1;

    // Directions
    let north;
    let south;
    let east;
    let west;
    let northWest;
    let northEast;
    let southEast;
    let southWest;

    // North
    if (CELL_MINUS_WIDTH < 0) {
      // Top Edge
      north = SIZE_MINUS_WIDTH + cell;
    } else {
      north = CELL_MINUS_WIDTH;
    }

    // South
    if (CELL_PLUS_WIDTH >= SIZE) {
      // Bottom Edge
      south = cell - LC;
    } else {
      south = CELL_PLUS_WIDTH;
    }

    // East, North-East, South-East
    if (CELL_MOD_WIDTH === TOP_RIGHT) {
      east = LC;
      if (cell === TOP_RIGHT) {
        northEast = SIZE_MINUS_WIDTH;
        southEast = LC + width;
      } else if (cell === BOTTOM_RIGHT) {
        // bottom right corner
        northEast = LC - width;
        southEast = 0;
      } else {
        northEast = LC - width;
        southEast = LC + width;
      }
    } else {
      east = cell + 1;
      northEast = north + 1;
      southEast = south + 1;
    }

    // West, North-West, South-West
    if (CELL_MOD_WIDTH === 0) {
      // Left Edge
      west = RC;
      if (cell === SIZE_MINUS_WIDTH) {
        // bottom left corner
        northWest = cell - 1;
        southWest = TOP_RIGHT;
      } else if (cell === 0) {
        northWest = BOTTOM_RIGHT;
        southWest = RC + width;
      } else {
        northWest = cell - 1;
        southWest = RC + width;
      }
    } else {
      west = cell - 1;
      northWest = north - 1;
      southWest = south - 1;
    }
    return [
      northWest,
      north,
      northEast,
      west,
      east,
      southWest,
      south,
      southEast,
    ];
  };

  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = getNeighbors;
    }
    exports.getNeighbors = getNeighbors;
  } else {
    global.getNeighbors = getNeighbors;
  }
})();
