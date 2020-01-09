import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  searchInput: {
    margin: theme.spacing(1),
    width: "80vh",
    background: "white",
    opacity: "0.7",
    borderRadius: "12px",
    "& .MuiOutlinedInput-root": {
      height: "64px"
    },
    "& .MuiInputLabel-outlined": {
      fontSize: "24px !important"
    }
  },
  searchBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  searchTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    fontSize: "5rem",
    margin: "0px"
  },
  titleContent: {
    fontSize: "2rem",
    margin: "0",
    paddingBottom: "33px"
  }
}));

export default useStyles;
