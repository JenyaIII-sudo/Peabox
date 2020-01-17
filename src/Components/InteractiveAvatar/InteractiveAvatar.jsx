import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HtmlTooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import userImg from "../../images/avatar.jpg";
import Avatar from "@material-ui/core/Avatar";
import Profile from "../Profile";
import useStyles from "./Styles";

const InteractiveAvatar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.clickedAvatar}>
      <Avatar
        alt="Travis Howard"
        src={userImg}
        onClick={handleTooltipOpen}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default InteractiveAvatar;
