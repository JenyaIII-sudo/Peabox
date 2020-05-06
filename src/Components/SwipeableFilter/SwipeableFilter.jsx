import React from "react";
import { Button, Grid } from "@material-ui/core";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import useStyles from "./Styles";
import HomePageLink from "../SearchBar/HomePageLink";
import SortBy from "./SortBy/SortBy";

const SwipeableFilter = ({ link }) => {
  const classes = useStyles();
  const params = {
    slidesPerView: 6,
    breakpoints: {
      1690: {
        slidesPerView: 7,
        spaceBetween: 20
      },
      1444: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      1168: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      590: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },
    grabCursor: true
  };
  return (
    <div className={classes.homeSwipeableFilter}>
      <Grid container item xs={12}>
        <Grid item xs={3} sm={2} md={1} lg={1}>
          <div className={classes.allFilters}>
            <Button variant="contained" color="primary" disableElevation>
              All
            </Button>
          </div>
        </Grid>
        <Grid item xs={9} sm={10} md={8} lg={8}>
          <Swiper {...params}>
            {link.map(item => (
              <div className={classes.filterItem}>
                <HomePageLink link={item.name} theme={"sliderTheme"} />
              </div>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className={classes.sortBy}>
            <span className={classes.sortTitle}>Order by</span>
            <SortBy />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SwipeableFilter;
