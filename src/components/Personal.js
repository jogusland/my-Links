import Instagram from "../images/icons/social-media/Instagram/insta.svg";
import Twitter from "../images/icons/social-media/twitter.svg";
import Clubhouse from "../images/icons/social-media/Clubhouse/clubhouse-logo.jpg";
import Sale from "../images/icons/sale/sale-icon.svg";
import Facebook from "../images/icons/social-media/Facebook/facebook.jpg";
import classes from "./Personal.module.css";

const Body = () => {
  const info = [
    {
      name: "Instagram",
      img: Instagram,
      href: "https://www.instagram.com/joni_ye576/",
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

  const listItems = info.map((item) => {
    let image = <img src={item.img} alt={item.name} />;

    if (item.img === "") {
      image = "";
    }

    return (
      <div className={classes.list} key={Math.random()}>
        <a href={item.href} className="itemContainer">
          <div>{image}</div>
          <div>{item.name}</div>
        </a>
      </div>
    );
  });

  return (
    <main className={`${classes.container} flex`}>
      <h2 className={classes.section}>Personal</h2>

      <div className={classes.listContainer}>{listItems}</div>
    </main>
  );
};

export default Body;
