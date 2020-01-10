import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Styles";
import peaboxlogoMini from "../../images/miniLogo.png";
import Logo from "../Logo";
import { Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const FilterSearchBar = ({ handleOpenModal }) => {
  const classes = useStyles();

  return (
    <div className={classes.filterBarContent}>
      <Grid container item xs={12} className={classes.gridContainer}>
        <Grid item xs={12} sm={1} className={classes.logoWrapper}>
          <Logo size={peaboxlogoMini} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.searchWrapper}>
          <form className={classes.form}>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={5} className={classes.buttonWrapper}>
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
    </div>
  );
};

export default FilterSearchBar;
