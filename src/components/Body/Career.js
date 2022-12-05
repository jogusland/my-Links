import LinkedIn from "../../images/icons/social-media/linkedin.svg";
import Certificate from "../../images/icons/certificate/certificate.jpg";
import Website from "../../images/icons/website/website.svg";
import Facebook from "../../images/icons/social-media/Facebook/facebook.jpg";
import Github from "../../images/icons/social-media/Github/github.jpg";
import Instagram from "../../images/icons/social-media/Instagram/insta.jpg";
import Youtube from "../../images/icons/social-media/Youtube/youtube.jpg";
import Twitter from "../../images/icons/social-media/twitter.svg";
// import ListItems from "../Handler/ListItemsHandler";
import classes from "./Career.module.css";

const Career = () => {
  const info = [
    {
      name: "Portfolio",
      img: Website,
      href: "https://www.jonicoder.com/",
    },
    {
      name: "Instagram",
      img: Instagram,
      href: "https://www.instagram.com/windowlightmedia/",
    },
    {
      name: "Twitter",
      img: Twitter,
      href: "https://twitter.com/jonicoder",
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
      name: "Youtube",
      img: Youtube,
      href: "https://www.youtube.com/user/kelebew/videos",
    },
    {
      name: "Gumroad",
      img: "",
      href: "https://jonicoder.gumroad.com/l/website",
    },
    {
      name: "Calendly",
      img: "",
      href: "https://calendly.com/jogucareers/15min",
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
