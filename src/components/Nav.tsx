interface Props {
  handleHomeVisibility: () => void;
  handleCalendarVisibility: () => void;
  handleFormsVisibility: () => void;
  handleScoresVisibility: () => void;
}

const Nav = ({
  handleHomeVisibility,
  handleCalendarVisibility,
  handleFormsVisibility,
  handleScoresVisibility,
}: Props) => {
  return (
    <div className="row justify-content-center">
      <ul className="nav nav-pills col col-sm-10 col-md-8">
        <li className="nav-item">
          <button className="nav-link" onClick={handleHomeVisibility}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleCalendarVisibility}>
            Calendar
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleFormsVisibility}>
            Forms
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleScoresVisibility}>
            Scores
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
