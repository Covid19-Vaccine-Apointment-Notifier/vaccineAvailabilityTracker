import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { render, createPortal } from "react-dom";
let containerDomNode = HTMLElement;

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Toaster({ type, message }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);

    const myNode = document.getElementById("toaster");
    document.body.removeChild(myNode);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

//type can be of following types
//error
//info
//success
//warning

function DisplayToaster(type, message) {
  containerDomNode = document.createElement("div");
  containerDomNode.setAttribute("id", "toaster");
  document.body.appendChild(containerDomNode);
  render(<Toaster type={type} message={message} />, containerDomNode);
}

export default DisplayToaster;
