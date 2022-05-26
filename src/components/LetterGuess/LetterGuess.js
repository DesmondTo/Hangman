import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "./LetterGuess.css";

function LetterGuess({ guesses }) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      columns={{ xs: 12, sm: 24, md: 26, lg: 48, xl: 72 }}
    >
      {guesses.map((guess, index) => (
        <Grid key={index} item xs={1} sm={2} md={2} lg={3} xl={4}>
          <br />
          {guess.letter === " " ? (
            <span>&nbsp;</span>
          ) : guess.reveal ? (
            <Button variant="contained" className="correct-guess-letter">
              <Typography>{guess.letter}</Typography>
            </Button>
          ) : (
            <span>
              <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>&nbsp;
            </span>
          )}
        </Grid>
      ))}
    </Grid>
  );
}

export default LetterGuess;
