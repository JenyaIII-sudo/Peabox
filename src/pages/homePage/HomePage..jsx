import React, { useState } from "react";
import useStyles from "./HomePage.styles";
import SearchBar from "../../components/SearchBar/SearchBar.component";
import HomePageLinks from "../../components/SearchBar/HomePageLinks/HomePageLinks.component";
import Grid from "@material-ui/core/Grid";
import AuthModal from "../../components/authModal/AuthModal.component";
import peaboxlogo from "../../images/peaboxlogo.png";
import Logo from "../../components/logo/Logo.component";
import FilterSearchBar from "../../components/filterSearchBar/FilterSearchBar";
import LoginOrJoin from "../../components/loginOrJoin/loginOrJoin";

const HomePage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("login");
  const handleOpenModal = e => {
    setModal(e.currentTarget.name);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className={classes.header}>
          <div className={classes.nav}>
            <Grid container>
              <Grid item xs={12} md={6} lg={5}>
                <div className={classes.logo}>
                  <Logo peaboxlogo={peaboxlogo} />
                </div>
              </Grid>
              <Grid item xs={4} md={3} lg={5}>
                <LoginOrJoin handleOpenModal={handleOpenModal} />
              </Grid>
            </Grid>
          </div>
          <div className={classes.headerSearch}>
            <Grid container>
              <SearchBar />
              <HomePageLinks />
            </Grid>
          </div>
          <div className={classes.filterBar}>
            <Grid container>
              <FilterSearchBar handleOpenModal={handleOpenModal} />
            </Grid>
          </div>
          <div className={classes.main}></div>
        </div>
      </div>
      <AuthModal
        open={open}
        modal={modal}
        setModal={setModal}
        handleClose={handleCloseModal}
      />
    </div>
  );
};

export default HomePage;
