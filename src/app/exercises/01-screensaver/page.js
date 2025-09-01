import Link from "next/link";
import React from "react";

const COLORS = ["lavender", "slateblue", "hotpink", "white"];

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <p>Choose your color:</p>
      <ul>
        {COLORS.map((color) => (
          <li key={color}>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
