import React, { useState, useEffect } from "react";
import Grid from "./Grid.js";
import DefaultGridsContainer from "./DefaultGrisContainer";
import Controls from "./Controls";
import { useInterval, useGrid } from "../helper-functions/custom-hooks";

export default function GridContainer() {
  const [
    grid,
    setGrid,
    generation,
    setGeneration,
    clickable,
    setClickable,
    speedInput,
    setSpeedInput,
    stepThroughAutomata,
    toggleLife,
    setDefaultGrid,
    createRandomGrid,
    gridSize,
    setGridSize,
  ] = useGrid();

  useInterval(stepThroughAutomata, +speedInput || 500, grid, clickable);

  return (
    <div className="grid_container">
      <h1>Generation: {generation}</h1>
      <div className="grid_and_default_buttons">
        <Grid
          grid={grid}
          setGrid={setGrid}
          toggleLife={toggleLife}
          clickable={clickable}
          stepThroughAutomata={stepThroughAutomata}
          gridSize={gridSize}
        />

        <DefaultGridsContainer
          setDefaultGrid={setDefaultGrid}
          createRandomGrid={createRandomGrid}
          gridSize={gridSize}
          setGridSize={setGridSize}
          clickable={clickable}
        />
      </div>

      <Controls
        stepThroughAutomata={stepThroughAutomata}
        setClickable={setClickable}
        clickable={clickable}
        speedInput={speedInput}
        setSpeedInput={setSpeedInput}
      />
    </div>
  );
}
