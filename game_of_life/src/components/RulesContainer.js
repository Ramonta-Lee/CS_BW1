import React from "react";

export default function RulesContainer() {
  return (
    <div className="rules_container">
      <h1 class="glow" style={{ textDecoration: "underline" }}>
        Rules of the Game:
      </h1>
      <p>
        The universe of the Game of Life is an infinite, two-dimensional
        orthogonal grid of square cells, each of which is in one of two possible
        states, alive or dead.
        <br />
        Every cell interacts with its eight neighbors, which are the cells that
        are horizontally, vertically, or diagonally adjacent.
        <br /> 
        At each step in
        time, the following transitions occur:
      </p>
      <ol>
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
      </ol>
      <p> 
        The first
        generation is created by applying the above rules simultaneously to
        every cell in the seed; births and deaths occur simultaneously, and the
        discrete moment at which this happens is sometimes called a tick. Each
        generation is a pure function of the preceding one.
      </p>
    </div>
  );
}
