import LinkedIn from "../images/icons/social-media/linkedin.svg";
import Certificate from "../images/icons/certificate/certificate.svg";
import Website from "../images/icons/website/website.svg";
import Facebook from "../images/icons/social-media/Facebook/facebook.jpg";
import Github from "../images/icons/social-media/github.svg";
import Instagram from "../images/icons/social-media/Instagram/insta.svg";
import classes from "./Career.module.css";

const Body = () => {
  const info = [
    {
      name: "Portfolio Website",
      img: Website,
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
      img: Certificate,
      href: "https://www.credential.net/475ed24b-f8ab-4f7e-83d5-709f66e1e9de",
    },
    {
      name: "Web Dev Insta",
      img: Instagram,
      href: "https://www.instagram.com/joni_developer/",
    },
    {
      name: "Instagram",
      img: Instagram,
      href: "https://www.instagram.com/joni_ye576/",
    },
    {
      name: "Joni Developer",
      img: Facebook,
      href: "https://www.facebook.com/joniDeveloper",
    },
    {
      name: "Opensea",
      img: "",
      href: "https://opensea.io/jonisland",
    },
    {
      name: "Youtube",
      img: "",
      href: "https://www.youtube.com/user/kelebew/videos",
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
    </main>
  );
};

export default Body;
