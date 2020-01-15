import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Masonry from "react-masonry-css";
import UseStyles from "./Styles";
import UserCardInfo from "../UserCardInfo";

const VideoCards = () => {
  const classes = UseStyles();

  const [cardsContent, setCardsContent] = useState([
    {
      content:
        "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
    },
    {
      content:
        "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
    },
    {
      content:
        "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
    },
    {
      content:
        "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
    },
    {
      content:
        "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
    },
    {
      content:
        "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
    },
    {
      content:
        "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
    }
  ]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className={classes.cardsGrid}>
      <Grid container item xs={12}>
        <div className={classes.gridContainer}>
          <Grid item xs={12}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {cardsContent.map(item => (
                <div className="media-card">
                  <img src={item.content} alt="" />
                  <UserCardInfo />
                </div>
              ))}
            </Masonry>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default VideoCards;
