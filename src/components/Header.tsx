import "./Header.scss";
import logo from "./../assets/lvlpar-logo.png";

const Header = () => {
  return (
    <div className="row justify-content-center">
      <img src={logo} className="Header-logo col-1" alt="logo" />
      <h1 className="Header-heading text-white display-5 col-12 col-sm-9 col-md-8 text-center text-md-start mt-2 mb-0 my-md-auto">
        Lvl Par Golf League
      </h1>
    </div>
  );
};

export default Header;
