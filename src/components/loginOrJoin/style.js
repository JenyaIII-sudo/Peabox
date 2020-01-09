import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
  },
  filterLoginIn: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

export default useStyles;
