import React from "react";
import useStyles from "./Styles";
import LikeButton from "../LikeButton";
import Grid from "@material-ui/core/Grid";
import InteractiveAvatar from "../InteractiveAvatar/InteractiveAvatar";
import Profile from "../Profile";

const UserCardInfo = () => {
  const classes = useStyles();

  return (
    <div className="user-info">
      <Grid container>
        <Grid item xs={12} className={classes.gridContainer}>
          <Profile />
        </Grid>
        <Grid item xs={2}>
          <InteractiveAvatar />
        </Grid>
        <Grid item xs={7}>
          <span className={classes.userName}>Will Smith</span>
        </Grid>
        <Grid item xs={2}>
          <LikeButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserCardInfo;
