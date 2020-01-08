import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./HomePage.styles";
import SearchBar from "../../components/SearchBar/SearchBar.component";
import HomePageLinks from "../../components/SearchBar/HomePageLinks/HomePageLinks.component";
import Grid from "@material-ui/core/Grid";

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <div className="nav">
            <div className="logo">
              <h2 className="logo-name"></h2>
            </div>
            <div className="nav-loginIn">
              <Button className={classes.login} size="medium">
                Login
              </Button>
              <Button
                className={classes.join}
                size="medium"
                variant="contained"
                color="primary"
                disableElevation
              >
                Join
              </Button>
            </div>
          </div>
          <div className="header-search">
            <Grid container>
              <SearchBar />
              <HomePageLinks />
            </Grid>
          </div>
          <div className="main">
            <div className="nav-bar"></div>
            <div className="cads"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
