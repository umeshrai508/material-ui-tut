import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: "1em",
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "steelblue",
    },
  },
  title: {
    marginBottom: "20px",
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, settitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const classes = useStyles();
  const submitHandler = (e) => {
    e.preventDefault();
    settitleError(false);
    setDescriptionError(false);
    if (firstName == "") {
      settitleError(true);
    }
    if (description == "") {
      setDescriptionError(true);
    }
    if (firstName && description) {
      console.log(`Welcome ${firstName}! you said: ${description}`);
    }
  };
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Typography
          className={classes.title}
          component="h1"
          variant="h2"
          color="primary"
        >
          Create New Note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={submitHandler}>
          <TextField
            className={classes.field}
            variant="outlined"
            id="firstName"
            label="First Name"
            color="secondary"
            value={firstName}
            fullWidth
            required
            error={titleError}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            className={classes.field}
            variant="outlined"
            id="description"
            label="Description"
            color="secondary"
            multiline
            minRows={4}
            value={description}
            fullWidth
            required
            error={descriptionError}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            className={classes.btn}
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
}
