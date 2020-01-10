import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import useStyles from "./HomePageLink.Styles";

const HomePageLink = ({ link }) => {
  const classes = useStyles();
  console.log("WHAT?", link);

  return (
    <div className={classes.linkTabs}>
      <Link to="#" className={classes.linkTabsContent}>
        <span>{link}</span>
      </Link>
    </div>
  );
};

export default HomePageLink;
