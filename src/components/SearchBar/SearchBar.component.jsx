import React from "react";
import useStyles from "./SearchBar.Styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import HomePageLinks from "./HomePageLinks/HomePageLinks.component";

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item xs={12}>
        <div className="search-title">
          <h1>Company Stories</h1>
          <p>in peasized, snackable vids</p>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="search-bar">
          <TextField
            className={classes.margin}
            label="FinTech"
            variant="outlined"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
