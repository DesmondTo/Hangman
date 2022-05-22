import React from "react";

import Grid from "@mui/material/Grid";

function GamePageContainer({ userInputSection, hangmanDisplaySection }) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-evenly"
      alignItems="center"
      wrap="wrap-reverse"
      sx={{ minHeight: "90vh" }}
    >
      <Grid item xs={12} sm={12} md={5} textAlign="center">
        {userInputSection}
      </Grid>
      <Grid item xs={12} sm={12} md={5} textAlign="center">
        {hangmanDisplaySection}
      </Grid>
    </Grid>
  );
}

export default GamePageContainer;
