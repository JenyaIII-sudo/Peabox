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
        "https://images.unsplash.com/photo-1579118667076-4127d1ac1726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
    },
    {
      content:
        "https://images.unsplash.com/photo-1579129487067-39faae24feb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      content:
        "https://images.unsplash.com/photo-1579102230215-8824bd4f63ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
    },
    {
      content:
        "https://images.unsplash.com/photo-1579097361668-7d78af9566fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      content:
        "https://images.unsplash.com/photo-1579085354165-2363f36061ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
    },
    {
      content:
        "https://images.unsplash.com/photo-1579104672325-02553c49758f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      content:
        "https://images.unsplash.com/photo-1579105716117-a6527009b758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      content:
        "https://images.unsplash.com/photo-1578619918626-3bc52bc9cbe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
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
