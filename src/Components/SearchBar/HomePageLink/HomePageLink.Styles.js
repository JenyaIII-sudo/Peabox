import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  linkTabs: {
    paddingTop: "18px",
    display: "flex",
    width: "auto"
  },
  linkTabsContent: {
    margin: theme.spacing(1),
    border: "1px solid",
    color: "white",
    borderRadius: "4px",
    fontSize: "22px",
    padding: "8px 20px",
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": {
      borderRadius: "8px",
      color: "#23dc7e",
      transition: "0.3s"
    }
  },
  linkTabsInSlider: {
    paddingTop: "18px",
    display: "flex",
    width: "100%"
  },
  sliderTabs: {
    display: "flex",
    justifyContent: "center",
    border: "2px solid #ddd",
    color: "grey",
    borderRadius: "8px",
    fontSize: "22px",
    padding: "8px 20px",
    textDecoration: "none",
    transition: "0.3s",
    width: "100%",
    whiteSpace: "nowrap",
    "&:hover": {
      borderRadius: "4px",
      borderColor: "#23dc7e",
      color: "#23dc7e",
      transition: "0.3s"
    }
  }
}));

export default useStyles;
