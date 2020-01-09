import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./Styles";
import peaboxlogoMini from "../../images/miniLogo.png";
import Logo from "../logo/Logo.component";
import LoginOrJoin from "../loginOrJoin/loginOrJoin";
import Grid from "@material-ui/core/Grid";

const FilterSearchBar = ({ handleOpenModal }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.filterBarContent}>
        <Grid item xs={1}>
          <div className={classes.logoMini}>
            <Logo peaboxlogoMini={peaboxlogoMini} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <form className={classes.form}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={5}>
          <LoginOrJoin handleOpenModal={handleOpenModal} />
        </Grid>
      </div>
    </Grid>
  );
};

export default FilterSearchBar;
