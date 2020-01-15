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
    slidesPerView: 6,
    grabCursor: true
  };
  return (
    <div className={classes.homeSwipeableFilter}>
      <Grid container item xs={12}>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Swiper {...params}>
            {link.map(item => (
              <div className={classes.filterItem}>
                <Grid item xs={12} sm={12} md={2} lg={1}>
                  <HomePageLink link={item.name} theme={"sliderTheme"} />
                </Grid>
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
