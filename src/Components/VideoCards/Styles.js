import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardsGrid: {
    height: "auto",
    borderTop: "1px solid",
    borderColor: "lightgrey"
  },
  gridContainer: {
    padding: "1rem",
    paddingRight: "40px",
    paddingLeft: "40px"
  },
  mediaCard: {
    "&:hover userInfo": {
      display: "flex"
    },
    "& img": {
      maxWidth: "100%",
      height: "auto"
    }
  }
}));

export default useStyles;
