import React, { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Key.css";

function Key({ value, onClickHandler, isDisabled }) {
  const setKeyIsDisabled = useState(isDisabled)[1]; // Only setState function is used.

  const keyClickHandler = () => {
    setKeyIsDisabled(true);
    onClickHandler({ key: value });
  };

  return (
    <Button
      variant="contained"
      onClick={keyClickHandler}
      className="alpha-button"
      disabled={isDisabled}
    >
      <Typography>{value}</Typography>
    </Button>
  );
}

export default Key;
