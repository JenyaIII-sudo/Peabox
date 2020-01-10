import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles(theme => ({
  headerContainer: {
    boxSizing: "border-box",
    padding: "0 40px",
    height: "80px",
    "@media screen and (max-width: 600px)": {
      padding: "0 5px"
    }
  },
  gridContainer: {
    height: "100%"
  },
  logoWrapper: {
    "@media screen and (max-width: 600px)": {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  buttonWrapper: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media screen and (max-width: 600px)": {
      justifyContent: "space-between"
    }
  },
  join: {
    backgroundColor: "#4be295",
    fontSize: "20px",
    width: "14%",
    borderRadius: "12px",
    margin: theme.spacing(1),
    color: "white",
    textTransform: "none"
  },
  login: {
    fontSize: "20px",
    width: "14%",
    borderRadius: "12px",
    margin: theme.spacing(1),
    color: "black",
    textTransform: "none"
  }
}));

export default headerStyles;
