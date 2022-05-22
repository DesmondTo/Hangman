import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function HangmanDisplaySection({ wrongGuesses, startGameHandler }) {
  return (
    <section>
      <h1>Insert Hangman Here</h1>
      <p>
        Wrong guesses:&nbsp;
        {wrongGuesses.map((wrongGuess, index) => (
          <span key={index}>{wrongGuess}, </span>
        ))}
      </p>
      <Button variant="contained" onClick={startGameHandler}>
        <Typography>Start Game</Typography>
      </Button>
    </section>
  );
}

export default HangmanDisplaySection;
