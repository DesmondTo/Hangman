import React from "react";

import Keyboard from "../components/Keyboard";
import LetterGuess from "../components/LetterGuess/LetterGuess";

function UserInputSection({ definition, guesses, keyPressedHandler, usedKeys }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {(definition !== "") && <p>({definition})</p>}
      <LetterGuess guesses={guesses} />
      <br />
      <br />
      <Keyboard onClickHandler={keyPressedHandler} usedKeys={usedKeys} />
    </section>
  );
}

export default UserInputSection;
