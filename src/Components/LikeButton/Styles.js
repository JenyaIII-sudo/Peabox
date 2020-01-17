import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  likeIt: {
    fill: "red"
  },
  likeCircle: {
    "&.MuiFab-root": {
      borderRadius: "25% !important"
    }
  },
  unLikeIt: {
    fill: "grey",
    "& :checked": {
      fill: "red"
    }
  }
}));

export default useStyles;
