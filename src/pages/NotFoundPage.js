import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function NotFoundPage(props) {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Error 404 : Not Found</h1>
      <p>
        <Button onClick={() => navigate("/")}>
          <Typography>Home</Typography>
        </Button>
      </p>
    </div>
  );
}

export default NotFoundPage;
