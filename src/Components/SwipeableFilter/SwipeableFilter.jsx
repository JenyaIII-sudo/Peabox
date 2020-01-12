import React from "react";
import Grid from "@material-ui/core/Grid";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import useStyles from "./Styles";
import HomePageLink from "../SearchBar/HomePageLink";
import SortBy from "./SortBy/SortBy";

const SwipeableFilter = ({ link }) => {
  const classes = useStyles();
  const params = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  return (
    <div className={classes.homeSwipeableFilter}>
      <Grid container>
        <Grid item xs={9}>
          <Swiper {...params}>
            {link.map(item => (
              <div className={classes.filterItem}>
                <HomePageLink link={item.name} />
              </div>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={3} className={classes.sortBy}>
          <span className={classes.sortTitle}>Order by</span>
          <SortBy />
        </Grid>
      </Grid>
    </div>
  );
};

export default SwipeableFilter;
