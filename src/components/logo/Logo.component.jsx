import React, { useMemo } from "react";
import PropTypes from "prop-types";

import useStyles from "./Logo.Styles";

import miniLogo from "../../images/miniLogo.png";
import peaboxLogo from "../../images/peaboxlogo.png";

const Logo = ({ size }) => {
  const classes = useStyles();

  const memoizedImage = useMemo(
    () => (size === "maxi" ? peaboxLogo : miniLogo),
    [size]
  );
  return <img src={memoizedImage} alt="peaboxlogo" className={classes.logo} />;
};

Logo.propTypes = {
  size: PropTypes.oneOf(["mini", "maxi"])
};

Logo.defaultProps = {
  size: "maxi"
};

export default Logo;
