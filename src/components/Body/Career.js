import LinkedIn from "../../images/icons/social-media/linkedin.svg";
import Certificate from "../../images/icons/certificate/certificate.jpg";
import Website from "../../images/icons/website/website.svg";
import Facebook from "../../images/icons/social-media/Facebook/facebook.jpg";
import Github from "../../images/icons/social-media/Github/github.jpg";
import Instagram from "../../images/icons/social-media/Instagram/insta.jpg";
import Youtube from "../../images/icons/social-media/Youtube/youtube.jpg";
// import ListItems from "../Handler/ListItemsHandler";
import classes from "./Career.module.css";

const Career = () => {
  const info = [
    {
      name: "Portfolio",
      img: Website,
      href: "https://jonicoder1.github.io/myportfolio/",
    },
    {
      name: "Instagram",
      img: Instagram,
      href: "https://www.instagram.com/jonicoder/",
    },
    {
      name: "LinkedIn",
      img: LinkedIn,
      href: "https://www.linkedin.com/in/jonicoder/",
    },
    {
      name: "Github",
      img: Github,
      href: "https://github.com/jonicoder1",
    },
    {
      name: "Certificate",
      img: Certificate,
      href: "https://www.credential.net/475ed24b-f8ab-4f7e-83d5-709f66e1e9de",
    },
    {
      name: "Facebook",
      img: Facebook,
      href: "https://www.facebook.com/jonicoder",
    },
    {
      name: "Youtube",
      img: Youtube,
      href: "https://www.youtube.com/user/kelebew/videos",
    },
    {
      name: "Medium",
      img: "",
      href: "https://medium.com/@jonicoder",
    },
  ];

  return (
    <main className={`${classes.container}  flex`}>
      <h2 className={classes.h2}>CAREER</h2>
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
    </main>
  );
};

export default Career;
