import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  userName: {
    alignSelf: "center",
    paddingLeft: "10px",
    color: "black"
  },
  follow: {
    marginLeft: "8px"
  },
  myMasonryGridColumn: {
    paddingLeft: "5px",
    backgroundClip: "padding-box"
  }
}));

export default useStyles;
