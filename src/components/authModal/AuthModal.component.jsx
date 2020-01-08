import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './LoginModal.styles';
import LoginModal from './Login.component';
import Registration from './Registration.component';
import RegistrationBusiness from './RegistrationBusiness.component';
import logoplaceholder from '../../images/logoplaceholder.png';
import peaboxlogo from '../../images/peaboxlogo.png';

const ModalAuth = ({ modal, open, handleClose, setModal }) => {
  const classes = useStyles();

  let modalShowing, sideStory, background_image;
  if (modal === 'login') {
    modalShowing = <LoginModal setModal={setModal} />;
    sideStory = (
      <p>
        <span style={{ display: 'block', fontWeight: 'bold' }}>
          Company Stories
        </span>{' '}
        in peasized, snackable vids
      </p>
    );
    background_image = `url(${peaboxlogo})`;
  } else if (modal === 'registration') {
    modalShowing = <Registration setModal={setModal} />;
    sideStory = (
      <p>
        <span style={{ display: 'block', fontWeight: 'bold' }}>
          Company Stories
        </span>{' '}
        in peasized, snackable vids
      </p>
    );
    background_image = `url(${logoplaceholder})`;
  } else {
    modalShowing = <RegistrationBusiness setModal={setModal} />;
    sideStory = (
      <p>
        Access the <span style={{ fontWeight: 'bold' }}>Pro Tools</span> -
        Analytics and Sponsored Ads for FREE, to help sell your company stories
      </p>
    );
    background_image = `url(${logoplaceholder})`;
  }

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Container maxWidth="md" className={classes.paper}>
          <Grid container spacing={0}>
            <Hidden only={['xs', 'sm']}>
              <Grid item md={6}>
                <div className={classes.companySide}>
                  <div
                    className={classes.leftSide}
                    style={{
                      backgroundImage: `${background_image}`
                    }}
                  >
                    <div className={classes.stories}>{sideStory}</div>
                  </div>
                </div>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6}>
              {modalShowing}
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </Modal>
  );
};

export default ModalAuth;
