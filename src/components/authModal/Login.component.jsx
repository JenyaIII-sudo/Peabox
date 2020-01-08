import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import useStyles from './LoginModal.styles';
import peaboxlogo from '../../images/peaboxlogo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const LoginModal = ({ setModal }) => {
  const [data, setData] = useState({ name: '', password: '' });
  const classes = useStyles();

  const handleChangeForm = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    console.log(data);
  };

  const handleLoginLinkedIn = e => {
    console.log(`i'm working with LinkedIn rn`);
  };

  return (
    <div className={classes.loginform}>
      <div>
        <img src={peaboxlogo} alt="peaboxLogo" className={classes.formLogo} />
      </div>
      <div>
        <form
          className={classes.formLogin}
          noValidate
          onSubmit={handleSubmitForm}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            label="Name"
            name="name"
            autoComplete="name"
            onChange={handleChangeForm}
            value={data.name}
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
            value={data.password}
            onChange={handleChangeForm}
            autoComplete="current-password"
          />
          <Link href="#" variant="body2" style={{ color: '#808080' }}>
            Forgot your password?
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
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLoginLinkedIn}
          className={classes.linkedin}
          startIcon={<LinkedInIcon />}
        >
          <span>Log In with Linkedin</span>
        </Button>

        <span
          style={{ color: '#808080', textAlign: 'center', display: 'block' }}
          name="registration"
        >
          Need an account?{' '}
          <span
            onClick={() => setModal('registration')}
            className={classes.signUp}
          >
            Sign up now
          </span>
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
