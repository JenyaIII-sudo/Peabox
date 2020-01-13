import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardsGrid: {
    height: "auto",
    borderTop: "1px solid",
    borderColor: "lightgrey"
  },
  gridContainer: {
    padding: "1rem"
  },
  mediaCard: {
    "& img": {
      maxWidth: "100%",
      height: "auto"
    }
  }
}));

export default useStyles;
