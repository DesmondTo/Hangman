import React from "react";

import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function GameRulePage(props) {
  let navigate = useNavigate();
  return (
    <div>
      <h1> Hangman</h1>
      <p>
        Man is in danger! It is up to you to save him before he gets hanged.
        Guess the mystery word correctly, and his life will be spared.
      </p>
      <p>
        Pick a letter every turn. You can only afford to make 6 incorrect
        choices./n Any more than 6, he gets hanged
      </p>
      <p>
        The number of letters in the mystery word will be denoted by the
        number/n of blanks given.
      </p>
      <p>
        Every correct letter you pick will be filled in on those blanks, then
        greyed out
      </p>
      <p>Every incorrect letter you pick will be greyed out on the keyboard.</p>
      <p>Press 'Start Game' to begin, Good Luck!</p>
      <p>
        <Button variant="contained" onClick={(e) => navigate("/game-page")}>
          Start Game
        </Button>
      </p>
    </div>
  );
}

export default GameRulePage;
