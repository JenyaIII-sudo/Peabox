import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import userImg from "../../../images/avatar.jpg";
import useStyles from "./Styles";

const Profile = () => {
  const classes = useStyles();

  return (
    <div className="user-info">
      <Grid container item xs={12}>
        <Grid item xs={2}>
          <Avatar alt="Travis Howard" src={userImg} />
        </Grid>
        <Grid item xs={6}>
          <span className={classes.userName}>Will Smith</span>
        </Grid>
        <Grid item xs={3}>
          <Button size="small" variant="outlined" color="primary">
            Follow
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
