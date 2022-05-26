import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function HangmanDisplaySection({ wrongGuesses, startGameHandler }) {
  return (
    <section>
      <img
        src={`hangman_display/hangman_light_${wrongGuesses.length}.png`}
        alt="Your hangman"
        style={{ width: "80%", height: "auto", margin: "5%" }}
      />
      <Button variant="contained" onClick={startGameHandler}>
        <Typography>Restart</Typography>
      </Button>
    </section>
  );
}

export default HangmanDisplaySection;
