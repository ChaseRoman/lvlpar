import logo from "./../assets/lvlpar-logo.png";

const Header = () => {
  return (
    <div className="row justify-content-center">
      <img src={logo} className="App-logo col-1" alt="logo" />
      <h1 className="col col-sm-8">Lvl Par Golf League</h1>
    </div>
  );
};

export default Header;
