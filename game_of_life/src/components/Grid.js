import React from "react";
import { gridDisplay, cellDisplay } from '../helper-functions/display-function';

export default function Grid({ grid, toggleLife, clickable, gridSize }) {

  return (
    <div className="grid" style={gridDisplay(gridSize)}>
      {/* inline styling allows for dynamic rendering of the grid and the cells */}
      {grid.map((cell, i) => {

        return (
          <div
            key={cell.id}
            className={cell.alive ? "alive" : "dead"}
            onClick={ clickable ? toggleLife : null}
            data-id={cell.id}
            style={cellDisplay(cell.alive, gridSize)}
          />
          );
        })}
    </div>
  );
}
