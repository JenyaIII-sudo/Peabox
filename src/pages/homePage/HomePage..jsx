import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './HomePage.styles';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import HomePageLinks from '../../components/SearchBar/HomePageLinks/HomePageLinks.component';
import Grid from '@material-ui/core/Grid';
import AuthModal from '../../components/authModal/AuthModal.component';

const HomePage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState('login');
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
        <div className="header">
          <div className="nav">
            <div className="logo">
              <h2 className="logo-name"></h2>
            </div>
            <div className="nav-loginIn">
              <Button
                className={classes.login}
                size="medium"
                name="login"
                onClick={handleOpenModal}
              >
                Login
              </Button>
              <Button
                className={classes.join}
                size="medium"
                variant="contained"
                color="primary"
                name="registration"
                onClick={handleOpenModal}
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
