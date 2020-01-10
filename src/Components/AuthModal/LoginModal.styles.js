import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0
  },

  paper: {
    padding: 0,
    display: "inline-block",
    justifyContent: "space-between",
    borderRadius: 15,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  },

  image: {
    width: "100%",
    height: "auto"
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },

  loginform: {
    marginTop: theme.spacing(8),
    alignItems: "center",
    maxWidth: "100%",
    padding: "0 5rem 5rem 5rem "
  },

  formLogo: {
    display: "block",
    margin: "2rem auto",
    maxWidth: "100%",
    height: "auto"
  },

  formLogin: {
    width: "100%",
    marginTop: theme.spacing(1)
  },

  submitLogin: {
    backgroundColor: "#6c62ff !important",
    margin: "1rem 0 1rem !important",
    textTransform: "none !important",
    padding: "0.6rem !important"
  },

  dropDownMenu: {
    width: "100%",
    margin: "1rem 0",
    padding: "0.6rem"
  },

  linkedin: {
    maxWidth: "100% !important",
    backgroundColor: "#eeeeee !important",
    padding: "0.6rem !important",
    color: "#414141 !important",
    margin: "0 0 1rem !important",
    textTransform: "none !important"
  },

  business: {
    textTransform: "none !important",
    padding: "0.6rem !important",
    maxWidth: "100% !important",
    backgroundColor: "#4ed986 !important",
    margin: "0 0 1rem !important"
  },

  companySide: {
    height: "100%",
    width: "100%",
    borderRadius: "15px 0 0 15px",
    background: `linear-gradient(0deg, rgba(239,239,239,1) 0%, rgba(255,255,255,1) 100%)`
  },

  leftSide: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%"
  },

  stories: {
    color: "#414141",
    padding: "6rem 0 0 4rem"
  },

  signUp: {
    fontWeight: "bold",
    color: "grey",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export default useStyles;
