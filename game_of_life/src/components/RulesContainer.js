import React from "react";

export default function RulesContainer() {
  console.log("re-renders");

  return (
    <div className="rules_container">
      <h1>Rules of the Game:</h1>
      <p>
        The universe of the Game of Life is an infinite, two-dimensional
        orthogonal gird of square cells, each of which is in one of two possible
        states, alive or dead, (or populated and unpopulated, respectively).
        Every cell interacts with its eight neighbors, which are the cells that
        are horizonatally, vertically, or diagonally adjacent. At each step in
        time, the following transitions occur:
      </p>
      <ul>
        <li>
          Any live cell with fewer than two live neighbors dies, as if by
          underpopulation.
        </li>
        <li>
          Any live cell with two or three live neighbors lives on to the next
          generation.
        </li>
        <li>
          Any live cell with more than three live neighbors dies, as if by
          overpopulation.
        </li>
        <li>
          Any dead cell with three live neighbors becomes a live cell, as if by
          reproduction.
        </li>
      </ul>
      <p>
        The initial pattern constitutes the seed of the system. The first
        generation is created by applying the above rules simultaneously to
        every cell in the seed; births and deaths occur simultaneously, and the
        discrete moment at which this happens is sometimes called a tick. Each
        generation is a pure function of the preceding one. The rules continue
        to be applied repeatedly to create further generations.
      </p>
    </div>
  );
}