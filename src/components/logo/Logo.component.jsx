import React from "react";
import useStyles from "./Logo.Styles";

const Logo = ({ peaboxlogo, peaboxlogoMini }) => {
  const classes = useStyles();
  return (
    <img
      src={peaboxlogo || peaboxlogoMini}
      alt="peaboxlogo"
      className={classes.logo}
    />
  );
};

export default Logo;
