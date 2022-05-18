import Instagram from "../images/social-media/Instagram/insta.svg";
import Github from "../images/social-media/github.svg";
import LinkedIn from "../images/social-media/linkedin.svg";
import Facebook from "../images/social-media/Facebook/facebook-logo.jpg";
import Twitter from "../images/social-media/twitter.svg";
import classes from "./Body.module.css";

const Body = () => {
  const info = [
    {
      name: "Portfolio Website",
      img: "",
      href: "https://jogusland.github.io/myportfolio/",
    },
    {
      name: "LinkedIn",
      img: LinkedIn,
      href: "https://www.linkedin.com/in/jogu/",
    },
    {
      name: "Github ",
      img: Github,
      href: "https://github.com/jogusland",
    },
    {
      name: "Certificate",
      img: "",
      href: "https://www.credential.net/475ed24b-f8ab-4f7e-83d5-709f66e1e9de",
    },
    {
      name: "Web Dev Insta",
      img: Instagram,
      href: "https://www.instagram.com/joni_developer/",
    },
    {
      name: "For Sale",
      img: "",
      href: "https://jogusland.github.io/for-sale/",
    },
    {
      name: "Jogu TV",
      img: Facebook,
      href: "https://www.facebook.com/jogusland",
    },
    {
      name: "Joni Developer",
      img: Facebook,
      href: "https://www.facebook.com/joniDeveloper",
    },
    {
      name: "Twitter",
      img: Twitter,
      href: "https://twitter.com/jogu253",
    },
    {
      name: "Instagram",
      img: Instagram,
      href: "https://www.instagram.com/joni_ye576/",
    },
    {
      name: "Club House: @jonislg",
      img: "",
      href: "https://www.clubhouse.com/@jonislg?utm_medium=ch_profile&utm_campaign=XM8lUYLB2PQCY6yCM09EmA-192269",
    },
    {
      name: "Opensea",
      img: "",
      href: "https://opensea.io/jonisland",
    },
  ];

  const listItems = info.map((item) => {
    let image = <img src={item.img} alt={item.name} />;

    if (item.img === "") {
      image = "";
    }

    return (
      <h3 key={Math.random()}>
        <a href={item.href} className="itemContainer">
          <div>{image}</div>
          <div>{item.name}</div>
        </a>
      </h3>
    );
  });

  return (
    <main className={`${classes} container flex`}>
      <div>{listItems}</div>
      <h4 className="grey">Video Editing: @windowlightmedia</h4>
    </main>
  );
};

export default Body;