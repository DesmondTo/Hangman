import React, { useState, useEffect, useCallback } from "react";

import { isAlphabet } from "../helper/StringHelper";
import GamePageContainer from "../components/GamePageContainer";
import UserInputSection from "../components/UserInputSection";
import HangmanDisplaySection from "../components/HangmanDisplaySection";
import EndGameBackdrop from "../components/EndGameBackdrop";

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
    fetch(RANDOM_WORD_GENERATOR_URL)
      .then((response) => response.json())
      .then((data) => {
        initializeGameStates();
        const wordGenerated = data[0];
        setWord(wordGenerated);
        initializeGuesses(wordGenerated);
      });
  }

  const keyPressedHandler = useCallback(
    (event) => {
      const IsKeyUsed = (key) => usedKeys.includes(key);
      const isWon = correctGuessCount >= word.length;
      const isLost = wrongGuessCount >= 8;
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
    },
    [guesses, usedKeys, correctGuessCount, wrongGuessCount, word.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPressedHandler);

    return function cleanup() {
      document.removeEventListener("keydown", keyPressedHandler);
    };
  }, [keyPressedHandler]);

  return (
    <>
      <GamePageContainer
        userInputSection={
          <UserInputSection
            word={word}
            guesses={guesses}
            keyPressedHandler={keyPressedHandler}
            usedKeys={usedKeys}
          />
        }
        hangmanDisplaySection={
          <HangmanDisplaySection
            wrongGuesses={wrongGuesses}
            startGameHandler={startGameHandler}
          />
        }
      />
      <EndGameBackdrop
        isWon={word.length > 0 && correctGuessCount >= word.length}
        isLost={wrongGuessCount >= 7}
        replayGameHandler={startGameHandler}
      />
    </>
  );
}

export default GamePage;
