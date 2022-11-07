import photo from "../images/my_photo.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className={classes.imgProfile} src={photo} alt="my photo" />
        <h1>JONICODER</h1>
      </div>
    </header>
  );
};

export default Header;
