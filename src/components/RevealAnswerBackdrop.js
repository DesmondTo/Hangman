import React from "react";

import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function RevealAnswerBackdrop({ answer, showAnswer, hideAnswerHandler }) {
  return (
    <Backdrop open={showAnswer}>
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Answer:
          </Typography>
          <Typography variant="p">{answer}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" onClick={hideAnswerHandler}>
            <Typography>Close</Typography>
          </Button>
        </CardActions>
      </Card>
    </Backdrop>
  );
}

export default RevealAnswerBackdrop;
