import React, { useState } from "react";
import { useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function HackerEffect(props) {
  const [intervalId, setIntervalId] = useState(null);

  function handleMouseOver(event) {
    console.log("mouse over")
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  }

  return <span data-value={props.text} onMouseOver={handleMouseOver}>{props.text}</span>;
}

export default HackerEffect;