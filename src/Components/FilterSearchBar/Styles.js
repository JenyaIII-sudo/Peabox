import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  filterBarContent: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "6px 40px",
    "@media screen and (max-width: 750px)": {
      padding: "10px 5px"
    }
  },
  searchInput: {
    backgroundColor: "#80808026",
    borderRadius: "8px"
  },

  gridContainer: {
    height: "100%"
  },
  logoWrapper: {
    "@media screen and (max-width: 691px)": {
      display: "none"
    }
  },
  form: {
    width: "100%",
    "& .MuiOutlinedInput-input": {
      fontSize: "20px"
    }
  },
  join: {
    backgroundColor: "#4be295",
    fontSize: "20px",
    width: "14%",
    borderRadius: "12px",
    margin: theme.spacing(1),
    color: "white",
    textTransform: "none",
    "&.MuiButton-contained": {
      boxShadow: "none"
    }
  },
  login: {
    fontSize: "20px",
    width: "14%",
    borderRadius: "12px",
    margin: theme.spacing(1),
    color: "black",
    textTransform: "none"
  },
  filterLoginIn: {
    display: "flex",
    justifyContent: "flex-end"
  },
  buttonWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media screen and (max-width: 600px)": {
      justifyContent: "space-between"
    }
  },
  searchWrapper: {
    "@media screen and (max-width: 600px)": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
  }
}));

export default useStyles;
