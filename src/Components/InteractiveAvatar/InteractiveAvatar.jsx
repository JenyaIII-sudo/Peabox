import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HtmlTooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import userImg from "../../images/avatar.jpg";
import Avatar from "@material-ui/core/Avatar";
import Profile from "./Profile";
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
    <div>
      <Grid container justify="center">
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Grid item xs={12}>
                <HtmlTooltip
                  className={classes.root}
                  PopperProps={{
                    disablePortal: true
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  placement="top-start"
                  title={<Profile />}
                  interactive
                  arrow
                >
                  <Avatar
                    alt="Travis Howard"
                    src={userImg}
                    onClick={handleTooltipOpen}
                  />
                </HtmlTooltip>
              </Grid>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
};

export default InteractiveAvatar;
