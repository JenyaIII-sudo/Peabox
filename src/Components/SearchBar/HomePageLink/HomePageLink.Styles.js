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
    color: "black",
    borderRadius: "4px",
    fontSize: "22px",
    padding: "8px 20px",
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": {
      borderRadius: "8px",
      color: "#694b19",
      transition: "0.3s"
    }
  },

  sliderTabs: {
    margin: theme.spacing(1),
    border: "1px solid #ddd",
    color: "grey",
    borderRadius: "4px",
    fontSize: "22px",
    padding: "8px 20px",
    textDecoration: "none",
    transition: "0.3s",
    "&:hover": {
      borderRadius: "8px",
      borderColor: "#694b19",
      color: "#694b19",
      transition: "0.3s"
    }
  },

  test: {
    color: "red !important"
  }
}));

export default useStyles;
