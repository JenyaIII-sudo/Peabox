import React from "react";
import Grid from "@material-ui/core/Grid";
import Masonry from "react-masonry-css";
import UseStyles from "./Styles";

const VideoCards = () => {
  const classes = UseStyles();

  return (
    <div className={classes.cardsGrid}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <div>My Element</div>
            <div>My Element</div>
            <div>My Element</div>
            <div>My Element</div>
            <div>My Element</div>
            <div>My Element</div>
          </Masonry>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoCards;
