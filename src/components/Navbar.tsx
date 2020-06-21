import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { AppBar, Button, Typography, Toolbar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {},
    navButton: {
      color: "white",
    },
    navbar: {
      justifyContent: "space-between",
    },
  })
);
export const Navbar = () => {
  const { user } = useContext(UserContext);
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.navbar}>
        <Typography>SC2 Predictor</Typography>
        <Button className={classes.navButton}>Tournaments</Button>
        <Button className={classes.navButton}>Your Predictions</Button>
        <Button className={classes.navButton}>
          {user ? "Log Out" : "Log in"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
