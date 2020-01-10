import { makeStyles } from "@material-ui/core/styles";
import backgroundHeader from "../../images/bank-blur-business-buy-259200.jpg";

const useStyles = makeStyles(theme => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  main: {
    height: "100vh"
  },
  headerSearch: {
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  firstLink: {
    fontSize: "23px",
    padding: "8px 20px"
  },
  filterBar: {
    height: "10%",
    borderBottom: "1px solid",
    display: "flex",

    alignItems: "center"
  },
  logo: {
    alignSelf: "flex-start",
    fontSize: "59px",
    margin: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "7vh"
  },
  filterLoginIn: {
    paddingRight: "59px",
    display: "flex"
  },
  bgForHeaderAndStoriesBlock: {
    background: `url(${backgroundHeader})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
}));

export default useStyles;
