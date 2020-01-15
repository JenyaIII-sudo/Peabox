import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  userInfo: {
    alignItems: "center",
    display: "none",
    transition: "0.3s",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  userName: {
    alignSelf: "center",
    paddingLeft: "10px"
  }
}));

export default useStyles;
