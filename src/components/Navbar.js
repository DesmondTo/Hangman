import React from "react";

import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ManIcon from "@mui/icons-material/Man";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function Navbar(props) {
  let navigate = useNavigate();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton onClick={() => navigate("/")}>
          Hangman
          <ManIcon />
        </IconButton>
        <span style={{ flexGrow: 1 }}></span>
        <IconButton onClick={props.handleMode}>
          {props.theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <IconButton onClick={() => navigate("game-rule")}>
          <HelpOutlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
