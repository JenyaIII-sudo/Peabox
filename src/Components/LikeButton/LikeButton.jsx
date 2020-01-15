import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Fab from "@material-ui/core/Fab";
import useStyles from "./Styles";

const LikeButton = () => {
  const classes = useStyles();

  const [like, setLike] = useState({
    likeThis: false
  });

  const likeIt = () => {
    if (like === false) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  console.log(like);
  return (
    <div>
      <Fab aria-label="like" onClick={likeIt}>
        <FavoriteIcon className={like ? classes.unLikeIt : classes.likeIt} />
      </Fab>
    </div>
  );
};

export default LikeButton;
