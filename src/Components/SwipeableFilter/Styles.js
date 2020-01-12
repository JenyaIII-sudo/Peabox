import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  homeSwipeableFilter: {
    height: "9vh",
    borderColor: "lightgrey",
    border: "2px solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  swiperContainer: {
    "& .swiper-container": { height: "8vh" }
  },
  filterItem: {
    border: "1px solid",
    width: "150px !important",
    borderColor: "white",
    marginRight: "0px !important",
    paddingBottom: "17px"
  },
  sortBy: {
    display: "flex",
    justifyContent: "flex-end",
    borderLeft: "2px solid",
    borderColor: "lightgrey"
  },
  sortTitle: {
    fontSize: "20px",
    color: "gray",
    alignSelf: "center"
  }
}));

export default useStyles;
