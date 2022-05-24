import React from "react";

import Keyboard from "../components/Keyboard";
import LetterGuess from "../components/LetterGuess";

function UserInputSection({ word, guesses, keyPressedHandler, usedKeys }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Random word generate: {word}</p>
      <LetterGuess guesses={guesses} />
      <br />
      <br />
      <Keyboard onClickHandler={keyPressedHandler} usedKeys={usedKeys} />
    </section>
  );
}

export default UserInputSection;
