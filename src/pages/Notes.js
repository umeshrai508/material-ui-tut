import React from "react";
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";

export default function Notes() {
  return (
    <Container>
      <Typography
        component="h2"
        variant="h6"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <ButtonGroup>
        <Button variant="outlined" color="primary" disableElevation>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => console.log("Hello World!")}
        >
          Submit
        </Button>
      </ButtonGroup>
    </Container>
  );
}
