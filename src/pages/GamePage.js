import React, { useState, useEffect, useCallback } from "react";

import { isAlphabet } from "../helper/StringHelper";
import GamePageContainer from "../components/GamePageContainer";
import UserInputSection from "../components/UserInputSection";
import HangmanDisplaySection from "../components/HangmanDisplaySection";
import EndGameBackdrop from "../components/EndGameBackdrop";

const RANDOM_WORD_GENERATOR_URL = "https://random-words-api.vercel.app/word";
const WORDS = [
  {
    word: "Abacus",
    definition: "A manual device used to perform arithmetic calculations"
  },
  {
    word: "Abyss",
    definition: "A deep, immeasurable space"
  },
  {
    word: "Benevolent",
    definition: "Kind, generous, charitable"
  },
  {
    word: "Catastrophe",
    definition: "A sudden and widespread disaster"
  },
  {
    word: "Debacle",
    definition: "A sudden and humiliating failure"
  },
  {
    word: "Euphoria",
    definition: "A feeling or state of intense excitement and happiness"
  },
  {
    word: "Furtive",
    definition: "Attempting to avoid attention or notice"
  },
  {
    word: "Gregarious",
    definition: "Fond of company; sociable"
  },
  {
    word: "Hypocrisy",
    definition: "The practice of claiming to have moral standards or beliefs to which one's own behavior does not conform"
  },
  {
    word: "Impetuous",
    definition: "Acting or done quickly and without thought or care"
  }
];


function GamePage({ theme }) {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
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

  const generateWordAndDefinition = useCallback(() => {
    const randomInt = Math.floor(Math.random() * 10);
    initializeGameStates();
    const wordGenerated = WORDS[randomInt].word.toLowerCase();
    const definition = WORDS[randomInt].definition;
    setWord(wordGenerated);
    initializeGuesses(wordGenerated);
    setDefinition(definition);
    // fetch(RANDOM_WORD_GENERATOR_URL)
    //   .then((response) => response.json())
    //   .then((data) => {
        // initializeGameStates();
        // const wordGenerated = data[0].word.toLowerCase();
        // const definition = data[0].definition.slice(0, -2);
        // setWord(wordGenerated);
        // initializeGuesses(wordGenerated);
        // setDefinition(definition);
    //   });
  }, []);

  function startGameHandler(event) {
    // Unfocus button after click.
    // It prevents user from accidentally pressing SPACE or ENTER
    // which restarts the game.
    if (event !== undefined) event.target.blur();
    generateWordAndDefinition();
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

  useEffect(() => generateWordAndDefinition(), [generateWordAndDefinition]);

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
            definition={definition}
            guesses={guesses}
            keyPressedHandler={keyPressedHandler}
            usedKeys={usedKeys}
          />
        }
        hangmanDisplaySection={
          <HangmanDisplaySection
            theme={theme}
            wrongGuesses={wrongGuesses}
            answer={word}
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
