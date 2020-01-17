import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import userImg from "../../images/avatar.jpg";
import useStyles from "./Styles";
import Masonry from "react-masonry-css";

const Profile = () => {
  const classes = useStyles();
  const [userContent, setContent] = useState([
    {
      content:
        "https://images.unsplash.com/photo-1579225426792-c92375f35989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      content:
        "https://images.unsplash.com/photo-1579229762084-7e97ab75b832?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      content:
        "https://images.unsplash.com/photo-1578906725735-b6a395151840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ]);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
    500: 3
  };

  return (
    <div className="user-info-afterhover">
      <Grid container item xs={12} className={classes.gridContainer}>
        <Grid item xs={2}>
          <Avatar alt="Travis Howard" src={userImg} />
        </Grid>
        <Grid item xs={5}>
          <span className={classes.userName}>Will Smith</span>
        </Grid>
        <Grid item xs={4}>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            className={classes.follow}
          >
            Follow
          </Button>
        </Grid>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName={classes.myMasonryGridColumn}
        >
          {userContent.map(item => (
            <div className="media-card">
              <img src={item.content} alt="" />
            </div>
          ))}
        </Masonry>
      </Grid>
    </div>
  );
};

export default Profile;
