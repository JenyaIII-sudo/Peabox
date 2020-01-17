import { makeStyles } from "@material-ui/core/styles";
import Background from "../../images/UserCards/sammy-joonhee-9OZoT3XHRvw-unsplash.jpg";

const useStyles = makeStyles(() => ({
  cardsGrid: {
    height: "auto",
    borderTop: "1px solid",
    borderColor: "lightgrey"
  },
  gridContainer: {
    padding: "1rem",
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingTop: "40px"
  },
  mediaCard: {
    background: `url(${Background})`,
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
