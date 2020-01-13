import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  searchInput: {
    margin: theme.spacing(1),
    width: "80vh",
    background: "#ffffff85",
    borderRadius: "12px",
    "& .MuiOutlinedInput-root": {
      height: "64px"
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "24px"
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
    flexDirection: "column",
    alignSelf: "flex-end"
  },
  filterTitle: {
    fontSize: "20px",
    alignSelf: "flex-end",
    padding: "8px 20px",
    margin: "10px",
    whiteSpace: "nowrap"
  },
  title: {
    fontSize: "5rem",
    margin: "0px"
  },
  titleContent: {
    fontSize: "2rem",
    margin: "0",
    paddingBottom: "33px"
  },
  gridContainer: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "normal"
  },
  pageLinksContainer: {
    display: "flex",
    justifyContent: "center",
    width: "auto !important",
    flexWrap: "wrap"
  }
}));

export default useStyles;
