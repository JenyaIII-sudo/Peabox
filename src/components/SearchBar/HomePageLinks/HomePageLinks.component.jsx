import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import useStyles from "./HomePageLinks.Styles";

const HomePageLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.linkTabs}>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={2} lg={3}>
          <a className={classes.firstTab}>Most popular</a>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link to="#" className={classes.linkTabsContent}>
            <span>Culture</span>
          </Link>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link to="#" className={classes.linkTabsContent}>
            <span>Founder</span>
          </Link>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link to="#" className={classes.linkTabsContent}>
            <span>Product</span>
          </Link>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link to="#" className={classes.linkTabsContent}>
            <span>Careers</span>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageLinks;
