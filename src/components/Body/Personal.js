import Instagram from "../../images/icons/social-media/Instagram/insta.svg";
import Twitter from "../../images/icons/social-media/twitter.svg";
import Clubhouse from "../../images/icons/social-media/Clubhouse/clubhouse-logo.jpg";
import Sale from "../../images/icons/sale/sale-icon.svg";
import Facebook from "../../images/icons/social-media/Facebook/facebook.jpg";
import ListItemsHandler from "../Handler/ListItemsHandler";
import classes from "./Personal.module.css";

import React, { useState } from "react";

const Personal = () => {
  const info = [
    {
      name: "Instagram",
      img: Instagram,
      href: "https://www.instagram.com/joni_ye588/",
    },
    {
      name: "For Sale",
      img: Sale,
      href: "https://jogusland.github.io/for-sale/",
    },
    {
      name: "Jogu TV",
      img: Facebook,
      href: "https://www.facebook.com/jogusland",
    },
    {
      name: "Twitter",
      img: Twitter,
      href: "https://twitter.com/jogu253",
    },
    {
      name: "Club House",
      img: Clubhouse,
      href: "https://www.clubhouse.com/@jonislg?utm_medium=ch_profile&utm_campaign=XM8lUYLB2PQCY6yCM09EmA-192269",
    },
  ];

  // const [button, changeButton] = useState("Hello");

  // const changeHandler = () => {
  //   changeButton("I changed the button");
  //   console.log(button);
  // };

  return (
    <main className={`${classes.container} flex`}>
      <h2 className={classes.section}>Personal</h2>
      {/* <button onClick={changeHandler}>{button}</button> */}
      <div className={classes.listContainer}>
        <ListItemsHandler info={info} classes={classes} />
      </div>
    </main>
  );
};

export default Personal;
