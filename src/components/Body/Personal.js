import Instagram from "../../images/icons/social-media/Instagram/insta.jpg";
import Twitter from "../../images/icons/social-media/twitter.svg";
import Clubhouse from "../../images/icons/social-media/Clubhouse/clubhouse-logo.jpg";
import Sale from "../../images/icons/sale/sale-icon.svg";
import Facebook from "../../images/icons/social-media/Facebook/facebook.jpg";
import classes from "./Personal.module.css";

const Personal = () => {
  const info = [
    {
      name: "Insta",
      img: Instagram,
      href: "https://www.instagram.com/jonicoder/",
    },
    {
      name: "Twitter",
      img: Twitter,
      href: "https://twitter.com/jonicoder",
    },
    {
      name: "JoguTV",
      img: Facebook,
      href: "https://www.facebook.com/jonicoder",
    },
    {
      name: "Sale",
      img: Sale,
      href: "https://jonicoder1.github.io/for-sale/",
    },
    {
      name: "Club House",
      img: Clubhouse,
      href: "https://www.clubhouse.com/@jonicoder?utm_medium=ch_profile&utm_campaign=XM8lUYLB2PQCY6yCM09EmA-192269",
    },
    {
      name: "Opensea",
      img: "",
      href: "https://opensea.io/jonicoder",
    },
  ];

  return (
    <main className={`${classes.container} flex`}>
      <h2 className={classes.h2}>PERSONAL</h2>
      <div className={classes.listContainer}>
        {info.map((item) => {
          let image = <img src={item.img} alt={item.name} />;
          if (item.img === "") {
            image = "";
          }
          return (
            <div key={Math.random()} className={classes.list}>
              <a href={item.href}>
                <div>{image}</div>
                <p>{item.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Personal;
