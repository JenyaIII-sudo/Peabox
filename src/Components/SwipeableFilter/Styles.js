import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  homeSwipeableFilter: {
    borderColor: "lightgrey",
    borderTop: "1px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  swiperContainer: {
    "& .swiper-container": { height: "8vh" }
  },
  filterItem: {
    border: "1px solid",
    borderColor: "#ffffff00",
    marginRight: "0px !important",
    paddingBottom: "17px",
    margin: "0px 20px"
  },
  allFilters: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "6px",
    "& .MuiButton-containedPrimary": {
      color: "#4713e2",
      textTransform: "none",
      backgroundColor: "#2a0ad833",
      width: "61%",
      fontSize: "22px",
      borderRadius: "8px"
    }
  },
  sortBy: {
    display: "flex",
    justifyContent: "flex-end",
    borderLeft: "1px solid",
    borderColor: "lightgrey",
    height: "9vh",
    alignItems: "center",
    "@media screen and (max-width: 650px)": {
      justifyContent: "center"
    }
  },
  sortTitle: {
    fontSize: "20px",
    color: "gray",
    alignSelf: "center",
    paddingRight: "10px",
    whiteSpace: "nowrap"
  }
}));

export default useStyles;
