import React from "react";
import { Button, Grid } from "@material-ui/core";
import Logo from "../logo/Logo.component";
import makeHeaderStyles from "./Header.styles";

const Header = () => {
  const classes = makeHeaderStyles();
  return (
    <header className={classes.headerContainer}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={6} className={classes.logoWrapper}>
          <Logo />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.buttonWrapper}>
          <Button>Login</Button>
          <Button variant="contained">Join</Button>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
