import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  likeIt: {
    fill: "red"
  },
  unLikeIt: {
    fill: "grey",
    "& :checked": {
      fill: "red"
    }
  }
}));

export default useStyles;
