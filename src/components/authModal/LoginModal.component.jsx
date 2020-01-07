import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import useStyles from './LoginModal.styles';
import peaboxlogo from '../../images/peaboxlogo.png';

const LoginModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Login
      </button>
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
              <Grid item xs={12} md={6} className={classes.companySide}>
                <span className={classes.stories}>Company Stories</span>
                <br />
                <span>in peasized, snackable vids</span>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={classes.loginform}>
                  <img
                    src={peaboxlogo}
                    alt="peaboxLogo"
                    className={classes.formLogo}
                  />
                  <form className={classes.formLogin} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      label="Name"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      name="password"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submitLogin}
                    >
                      Log In
                    </Button>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.linkedin}
                    >
                      Log In with linkedin
                    </Button>

                    <Link href="#" variant="body2">
                      Need an account? Sign up now
                    </Link>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
};

export default LoginModal;
