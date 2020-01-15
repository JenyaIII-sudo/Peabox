import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./HomePageLink.Styles";

const HomePageLink = ({ link, theme }) => {
  const classes = useStyles();
  console.log("WHAT?", link);

  let defaultClass = classes.linkTabsContent;

  if (theme === "sliderTheme") {
    defaultClass = classes.sliderTabs;
  }

  return (
    <div className={classes.linkTabs}>
      <Link to="#" className={defaultClass}>
        <span>{link}</span>
      </Link>
    </div>
  );
};

export default HomePageLink;
