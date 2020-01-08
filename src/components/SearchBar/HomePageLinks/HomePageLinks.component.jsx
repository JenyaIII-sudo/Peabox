import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const HomePageLinks = () => {
  return (
    <div className="link-tabs">
      <Grid container spacing={3}>
        <Grid container item xs={12} md={2} lg={3}>
          <a className="firstLink">Most popular</a>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link>
            <span>Culture</span>
          </Link>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link>
            <span>Founder</span>
          </Link>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link>
            <span>Product</span>
          </Link>
        </Grid>
        <Grid container item xs={6} md={2} lg={2}>
          <Link>
            <span>Careers</span>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePageLinks;
