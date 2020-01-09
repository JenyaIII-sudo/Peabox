import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

const LoginOrJoin = ({ handleOpenModal }) => {
  const classes = useStyles();

  return (
    <div className={classes.filterLoginIn}>
      <Button
        className={classes.login}
        size="medium"
        name="login"
        onClick={handleOpenModal}
      >
        Login
      </Button>
      <Button
        className={classes.join}
        size="medium"
        variant="contained"
        color="primary"
        name="registration"
        onClick={handleOpenModal}
        disableElevation
      >
        Join
      </Button>
    </div>
  );
};

export default LoginOrJoin;
