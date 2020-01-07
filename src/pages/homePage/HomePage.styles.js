import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  join: {
    backgroundColor: "#4be295",
    fontSize: "20px",
    width: "60%",
    borderRadius: "12px",
    margin: theme.spacing(1)
  },
  login: {
    fontSize: "20px",
    width: "60%",
    borderRadius: "12px",
    margin: theme.spacing(1)
  },
  margin: {
    margin: theme.spacing(1),
    width: "70vh",
    background: "white",
    opacity: "0.3",
    borderRadius: "12px"
  }
}));

export default useStyles;
