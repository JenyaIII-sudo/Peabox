import React from "react";
import useStyles from "./SearchBar.Styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import HomePageLink from "./HomePageLink";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const SearchBar = ({ searchFilter }) => {
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
        <form className={classes.searchBar}>
          <TextField
            className={classes.searchInput}
            placeholder="FinTech"
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
        <Grid item xs={12} className={classes.pageLinksContainer}>
          <span className={classes.filterTitle}>Most popular</span>
          {searchFilter.map(item => (
            <Grid container item xs={6} sm={3} md={2} lg={1}>
              <Grid container item xs={6} sm={3} md={2} lg={2}>
                <HomePageLink link={item.name} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
