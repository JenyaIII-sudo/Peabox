import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const HomePageLinks = () => {
  return (
    <div className="link-tabs">
      <Link>
        <a className="firstLink">Most popular</a>
      </Link>
      <Link>
        <span>Culture</span>
      </Link>
      <Link>
        <span>Founder</span>
      </Link>
      <Link>
        <span>Product</span>
      </Link>
      <Link>
        <span>Careers</span>
      </Link>
    </div>
  );
};

export default HomePageLinks;
