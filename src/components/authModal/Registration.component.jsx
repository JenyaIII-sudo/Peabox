import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import useStyles from './LoginModal.styles';
import peaboxlogo from '../../images/peaboxlogo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const LoginModal = ({ setModal }) => {
  const [data, setData] = useState({ email: '', password: '' });
  const classes = useStyles();

  const handleChangeForm = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLoginLinkedIn = () => {
    console.log(`i'm working with Linkedin rn`);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={classes.loginform}>
      <img src={peaboxlogo} alt="peaboxLogo" className={classes.formLogo} />
      <form className={classes.formLogin} onSubmit={handleLoginSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="email"
          label="E-mail"
          name="email"
          onChange={handleChangeForm}
          value={data.email}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          name="password"
          label="Create Password"
          type="password"
          value={data.password}
          onChange={handleChangeForm}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submitLogin}
        >
          Continue
        </Button>
      </form>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.linkedin}
        startIcon={<LinkedInIcon />}
        onClick={handleLoginLinkedIn}
      >
        Continue with linkedin
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.business}
        onClick={() => setModal('registartionBusiness')}
      >
        Create a Business Account
      </Button>
      <span
        style={{
          textAlign: 'center',
          display: 'block',
          color: 'grey',
          padding: '0 0 1rem 0'
        }}
      >
        Creating an account means you're ok with Peabox's{' '}
        <Link style={{ fontWeight: 'bold', color: 'grey' }}>
          Business Terms of Services
        </Link>{' '}
        and{' '}
        <Link style={{ fontWeight: 'bold', color: 'grey' }}>
          Privacy Police
        </Link>{' '}
      </span>
      <span style={{ textAlign: 'center', display: 'block', color: 'grey' }}>
        Already a member?{' '}
        <span
          onClick={() => setModal('login')}
          name="login"
          className={classes.signUp}
        >
          {' '}
          Sign in now
        </span>
      </span>
    </div>
  );
};

export default LoginModal;
