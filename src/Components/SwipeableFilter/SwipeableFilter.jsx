import React from "react";
import Grid from "@material-ui/core/Grid";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import useStyles from "./Styles";
import HomePageLink from "../SearchBar/HomePageLink";

const SwipeableFilter = ({ link }) => {
  const classes = useStyles();
  const params = {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  return (
    <div className={classes.homehomeSwipeableFilter}>
      <Grid container>
        <Grid item xs={8}>
          <Swiper {...params}>
            {link.map(item => (
              <div className={classes.filterItem}>
                <HomePageLink link={item.name} />
              </div>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SwipeableFilter;
