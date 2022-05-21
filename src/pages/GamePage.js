import React, { useState, useEffect } from "react";

import LetterGuess from "../components/LetterGuess";
import { isAlphabet } from "../helper/StringHelper";

const RANDOM_WORD_GENERATOR_URL = "https://random-word-api.herokuapp.com/word";

function GamePage() {
  const [word, setWord] = useState("");
  const [usedKeys, setUsedKeys] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [correctGuessCount, setCorrectGuessCount] = useState(0);
  const [wrongGuessCount, setWrongGuessCount] = useState(0);

  // Initialize all game states to default value.
  function initializeGameStates() {
    setUsedKeys([]);
    setGuesses([]);
    setWrongGuesses([]);
    setCorrectGuessCount(0);
    setWrongGuessCount(0);
  }

  function initializeGuesses(wordGenerated) {
    wordGenerated.split("").map((letter) =>
      setGuesses((prevGuesses) => [
        ...prevGuesses,
        {
          letter: letter,
          reveal: false,
        },
      ])
    );
  }

  function startGameHandler(event) {
    // Unfocus button after click.
    // It prevents user from accidentally pressing SPACE or ENTER
    // which restarts the game.
    event.target.blur();

    initializeGameStates();
    fetch(RANDOM_WORD_GENERATOR_URL)
      .then((response) => response.json())
      .then((data) => {
        const wordGenerated = data[0];
        setWord(wordGenerated);
        initializeGuesses(wordGenerated);
      });
  }

  useEffect(() => {
    function keyPressedHandler(event) {
      const IsKeyUsed = (key) => usedKeys.includes(key);
      const isWon = correctGuessCount >= word.length;
      const isLost = wrongGuessCount >= 6;
      // Reveal the correct guess, if any.
      const handleCorrectGuess = (guessKey) =>
        setGuesses(
          guesses.map((guess) => {
            if (guess.letter === guessKey) {
              setCorrectGuessCount((count) => count + 1);
              return { ...guess, reveal: true };
            }
            return { ...guess };
          })
        );
      
      // Do nothing if the key is used once.
      // Else, proceed with the key pressed.
      if (IsKeyUsed(event.key)) return;
      setUsedKeys((usedLetter) => [...usedLetter, event.key]);

      if (isWon || isLost) return;

      if (isAlphabet(event.key)) {
        const guessKey = event.key;
        const isLetterMatchKey = (guess) => guess.letter === guessKey;
        const isWrongGuess = guesses.filter(isLetterMatchKey).length === 0;
        handleCorrectGuess(guessKey);

        if (isWrongGuess) {
          setWrongGuesses((wrongGuess) => [...wrongGuess, guessKey]);
          setWrongGuessCount((count) => count + 1);
        }
      }
    }

    document.addEventListener("keydown", keyPressedHandler);

    return function cleanup() {
      document.removeEventListener("keydown", keyPressedHandler);
    };
  }, [guesses, usedKeys, correctGuessCount, wrongGuessCount, word.length]);

  return (
    <div>
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
      <p>
        Wrong guesses:&nbsp;
        {wrongGuesses.map((wrongGuess, index) => (
          <span key={index}>{wrongGuess}, </span>
        ))}
      </p>
      {word.length > 0 && correctGuessCount >= word.length && (
        <p style={{ color: "green" }}>You won!</p>
      )}
      {wrongGuessCount >= 6 && <p style={{ color: "red" }}>You lose!</p>}
      <button onClick={(e) => startGameHandler(e)}>Play</button>
    </div>
  );
}

export default GamePage;
