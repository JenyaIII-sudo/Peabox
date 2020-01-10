import React, { useState } from "react";
import useStyles from "./HomePage.styles";
import SearchBar from "../../Components/SearchBar/SearchBar";
import AuthModal from "../../Components/AuthModal/AuthModal.component";
import FilterSearchBar from "../../Components/FilterSearchBar/FilterSearchBar";

import Header from "../../Components/Header";
import SwipeableFilter from "../../Components/SwipeableFilter";

const HomePage = () => {
  const classes = useStyles();

  const initialLinks = [
    { name: "Culture" },
    { name: "Founder" },
    { name: "Product" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" },
    { name: "Careers" }
  ];

  const [pageLinks, setPageLinks] = useState(initialLinks);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("login");
  const handleOpenModal = e => {
    setModal(e.currentTarget.name);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className={classes.bgForHeaderAndStoriesBlock}>
          <Header handleOpenModal={handleOpenModal} />
          <SearchBar link={pageLinks} />
        </div>
        <FilterSearchBar handleOpenModal={handleOpenModal} />
        <AuthModal
          open={open}
          modal={modal}
          setModal={setModal}
          handleClose={handleCloseModal}
        />
        <SwipeableFilter link={pageLinks} />
      </div>
    </div>
    /* // <div className="container">
    //   <div className="row">
    //     <div className={classes.header}>
    //       <div className={classes.nav}>
    //         <Grid container>
    //           <Grid item xs={12} md={6} lg={5}>
    //             <div className={classes.logo}>
    //               <Logo peaboxlogo={peaboxlogo} />
    //             </div>
    //           </Grid>
    //           <Grid item xs={4} md={3} lg={5}>
    //             <LoginOrJoin handleOpenModal={handleOpenModal} />
    //           </Grid>
    //         </Grid>
    //       </div>
    //       <div className={classes.headerSearch}>
    //         <Grid container>
    //           <SearchBar />
    //           <HomePageLinks />
    //         </Grid>
    //       </div>
    //       <div className={classes.filterBar}>
    //         <Grid container>
    //           <FilterSearchBar handleOpenModal={handleOpenModal} />
    //         </Grid>
    //       </div>
    //       <div className={classes.main}></div>
    //     </div>
    //   </div> */
  );
};

export default HomePage;
