import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './LoginModal.styles';
import peaboxlogo from '../../images/peaboxlogo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const LoginModal = ({ setModal }) => {
  const [data, setData] = useState({ email: '', password: '', role: 'None' });
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();

  const handleRegistrationLinkedin = e => {
    console.log(`i'm working with LinkedIn rn`);
  };

  const handleSubmitRegistration = e => {
    e.preventDefault();
    console.log(data);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleOpen = () => {
    setOpenMenu(true);
  };

  const handleChangeForm = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.loginform}>
      <img src={peaboxlogo} alt="peaboxLogo" className={classes.formLogo} />
      <form className={classes.formLogin} onSubmit={handleSubmitRegistration}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          label="Company E-mail"
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

        <FormControl fullWidth variant="outlined">
          <Select
            placeholder="Role"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openMenu}
            onClose={handleClose}
            onOpen={handleOpen}
            value={data.role}
            name="role"
            style={{ padding: 0 }}
            onChange={handleChangeForm}
            className={classes.dropDownMenu}
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Misha">Misha</MenuItem>
            <MenuItem value="Alesha">Alesha</MenuItem>
            <MenuItem value="Alexei">Alexei</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.business}
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
        onClick={handleRegistrationLinkedin}
      >
        Continue with Linkedin
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
