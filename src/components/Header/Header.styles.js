import {
  makeStyles
} from "@material-ui/core/styles";

const headerStyles = makeStyles(theme => ({
  headerContainer: {
    boxSizing: 'border-box',
    padding: '0 40px',
    height: '80px',
    '@media screen and (max-width: 600px)': {
      padding: '0 5px',
    },
  },
  gridContainer: {
    height: '100%',
  },
  logoWrapper: {
    '@media screen and (max-width: 600px)': {
      display: 'flex',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  buttonWrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '@media screen and (max-width: 600px)': {
      justifyContent: 'space-between',
    },
  },
}));

export default headerStyles;