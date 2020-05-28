import React from "react";

export default function About() {
  console.log("re-renders");

  return (
    <div className="about_section">
      <p>
        Learn more about Conway's Game of Life:{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
        >
          Conway's Game of Life Wikipedia
        </a>
      </p>
    </div>
  );
}
