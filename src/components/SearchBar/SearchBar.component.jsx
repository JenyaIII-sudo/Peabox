import React from "react";
import useStyles from "./SearchBar.Styles";
import TextField from "@material-ui/core/TextField";
import HomePageLinks from "./SearchBarFilters/HomePageLinks.component";

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className="home-search">
      <div className="search-title">
        <h1>Company Stories</h1>
        <p>in peasized, snackable vids</p>
      </div>
      <div className="search-bar">
        <TextField
          className={classes.margin}
          label="FinTech"
          variant="outlined"
        />
      </div>
      <HomePageLinks />
    </div>
  );
};

export default SearchBar;
