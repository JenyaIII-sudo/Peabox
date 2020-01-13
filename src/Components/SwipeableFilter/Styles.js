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
    width: "150px !important",
    borderColor: "white",
    marginRight: "0px !important",
    paddingBottom: "17px"
  },
  sortBy: {
    display: "flex",
    justifyContent: "flex-end",
    borderLeft: "1px solid",
    borderColor: "lightgrey",
    height: "9vh",
    alignItems: "center"
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
