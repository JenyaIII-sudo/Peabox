import { makeStyles } from '@material-ui/core/styles';
import peaboxlogo from '../../images/peaboxlogo.png';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  },
  paper: {
    padding: 0,
    //padding: '1rem 1rem 1rem 1rem'
    display: 'inline-block',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  },
  loginform: {
    marginTop: theme.spacing(8),
    alignItems: 'center',
    maxWidth: '100%',
    padding: '0 5rem 5rem 5rem '
  },
  formLogo: {
    display: 'block',
    margin: '2rem auto'
  },
  formLogin: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submitLogin: {
    backgroundColor: '#6c62ff',
    margin: theme.spacing(0.5, 0, 2)
  },
  linkedin: {
    maxWidth: '100%',
    backgroundColor: '#eeeeee',
    color: 'black',
    margin: theme.spacing(0, 0, 2)
  },

  companySide: {
    maxWidth: '100%',
    borderRadius: '15px 0 0 15px',
    background: `url(${peaboxlogo}) no-repeat center, linear-gradient(0deg, rgba(239,239,239,1) 0%, rgba(255,255,255,1) 100%)`
  },
  stories: {
    fontWeight: 'bold'
  }
}));

export default useStyles;
