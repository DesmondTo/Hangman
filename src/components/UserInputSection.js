import React from "react";

import LetterGuess from "../components/LetterGuess";
import Keyboard from "../components/Keyboard";

function UserInputSection({
  word,
  guesses,
  keyPressedHandler,
  usedKeys,
}) {
  return (
    <section>
      <p>Random word generate: {word}</p>
      <p>
        Your attempt:&nbsp;
        {guesses.map((guess, index) => (
          <LetterGuess
            key={index}
            letter={guess.letter}
            reveal={guess.reveal}
          />
        ))}
      </p>
      <Keyboard onClickHandler={keyPressedHandler} usedKeys={usedKeys} />
    </section>
  );
}

export default UserInputSection;
