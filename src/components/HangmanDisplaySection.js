import React, { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RevealAnswerBackdrop from "./RevealAnswerBackdrop";

function HangmanDisplaySection({ theme, wrongGuesses, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <img
            src={`hangman_display/hangman_${theme.palette.mode}_${
              wrongGuesses.length >= 8 ? 7 : wrongGuesses.length
            }.png`}
            alt="Your hangman"
            style={{ width: "90%", height: "auto", margin: "5%" }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setShowAnswer(true)}>
            <Typography>Reveal Answer 💡</Typography>
          </Button>
        </Grid>
      </Grid>
      <RevealAnswerBackdrop
        answer={answer}
        showAnswer={showAnswer}
        hideAnswerHandler={() => setShowAnswer(false)}
      />
    </>
  );
}

export default HangmanDisplaySection;
