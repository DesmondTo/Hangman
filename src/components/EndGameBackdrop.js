import React from "react";

import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function EndGameBackdrop({ isWon, isLost, replayGameHandler }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isWon || isLost}
    >
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            You
            {`${
              isWon
                ? " won!"
                : isLost
                ? " lost!"
                : " are in the middle of the game."
            }
            `}
          </Typography>
          <Typography variant="p">
            {isWon
              ? "Man's life has been spared."
              : isLost
              ? "Man's dead."
              : "Man's life in your hand now!"}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" onClick={replayGameHandler}>
            <Typography>Play Again</Typography>
          </Button>
        </CardActions>
      </Card>
    </Backdrop>
  );
}

export default EndGameBackdrop;
