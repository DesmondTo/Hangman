import React from "react";

import Grid from "@mui/material/Grid";

import Key from "./Key/Key";

function Keyboard({ onClickHandler, usedKeys }) {
  const alphaKeysRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  return alphaKeysRows.map((alphaKeysRow, rowIndex) => (
    // Each row of the keyboard
    <Grid
      key={rowIndex}
      container
      justifyContent="center"
      alignItems="center"
      columns={{ xs: 12, sm: 24, md: 26, lg: 48, xl: 72 }}
    >
      {alphaKeysRow.map((alphaKey, keyIndex) => (
        // Each key of the row
        <Grid
          key={`${rowIndex}${keyIndex}`}
          item
          xs={1}
          sm={2}
          md={2}
          lg={3}
          xl={4}
        >
          <br />
          <Key
            value={alphaKey}
            onClickHandler={onClickHandler}
            isDisabled={usedKeys.includes(alphaKey)}
          />
        </Grid>
      ))}
    </Grid>
  ));
}

export default Keyboard;
