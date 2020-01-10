import React from "react";
import { Button, Grid } from "@material-ui/core";
import Logo from "../Logo";
import makeHeaderStyles from "./Header.styles";

const Header = ({ handleOpenModal }) => {
  const classes = makeHeaderStyles();
  return (
    <header className={classes.headerContainer}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={6} className={classes.logoWrapper}>
          <Logo />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.buttonWrapper}>
          <Button
            name="login"
            onClick={handleOpenModal}
            className={classes.login}
          >
            Login
          </Button>
          <Button
            variant="contained"
            name="registration"
            color="primary"
            onClick={handleOpenModal}
            className={classes.join}
          >
            Join
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
