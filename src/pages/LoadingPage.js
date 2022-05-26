import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function LoadingPage(props) {
  return (
    <>
      <CircularProgress color="inherit" />
      <Typography>Loading</Typography>
    </>
  );
}

export default LoadingPage;
