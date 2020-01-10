import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  homehomeSwipeableFilter: {
    height: "8vh"
  },
  swiperContainer: {
    "& .swiper-container": { height: "8vh" }
  },
  filterItem: {
    border: "1px solid",
    width: "150px !important",
    borderColor: "white",
    marginRight: "0px !important"
  }
}));

export default useStyles;
