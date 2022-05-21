import React from "react";

function LetterGuess({ letter, reveal }) {
  if (letter === " ") {
    return <span>&nbsp;</span>;
  }

  return (
    <span>
      <u>{reveal ? letter : " "}</u>&nbsp;
    </span>
  );
}

export default LetterGuess;
