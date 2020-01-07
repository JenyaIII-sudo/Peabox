import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./HomePage.styles";
import SearchBar from "../../components/SearchBar/SearchBar.component";
import Filters from "../../components/SearchBar/SearchBarFilters/HomePageLinks.component";

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <div className="home">
            <div className="logo">
              <h2 className="logo-name">peabox</h2>
            </div>
            <div className="home-loginIn">
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
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
