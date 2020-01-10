import React from "react";
import useStyles from "./SearchBar.Styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import HomePageLinks from "./HomePageLinks/";

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid container item xs={12}>
        <div className={classes.searchTitle}>
          <h1 className={classes.title}>Company Stories</h1>
          <p className={classes.titleContent}>in peasized, snackable vids</p>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.searchBar}>
          <form>
            <TextField
              className={classes.searchInput}
              label="FinTech"
              variant="outlined"
            />
          </form>
        </div>
        <Grid item xs={12}>
          <HomePageLinks />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
