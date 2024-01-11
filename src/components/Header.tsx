import "./Header.scss";
import logo from "./../assets/lvlpar-logo.png";

const Header = () => {
  return (
    <div className="row justify-content-center">
      <img src={logo} className="Header-logo col-1" alt="logo" />
      <h1 className="Header-heading col-12 col-sm-8 text-center text-sm-start">
        Lvl Par Golf League
      </h1>
    </div>
  );
};

export default Header;
