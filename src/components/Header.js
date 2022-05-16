import photo from "../images/my_photo.jpg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="img-profile" src={photo} alt="my photo" />
        <h2>Joni</h2>
      </div>
    </header>
  );
};

export default Header;
