import React from "react";

import Container from "@mui/material/Container";

function PageContainer(props) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
      }}
    >
      {props.children}
    </Container>
  );
}

export default PageContainer;
