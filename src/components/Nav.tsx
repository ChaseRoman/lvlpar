import "./Nav.scss";

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
      <ul className="nav col col-sm-11 col-md-9 col-lg-8 justify-content-center justify-content-md-start">
        <li className="nav-item">
          <button className="nav-link" onClick={handleHomeVisibility}>
            <span className="d-none d-sm-block">Home</span>
            <i className="d-sm-none bi-house fs-2" />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleCalendarVisibility}>
            <span className="d-none d-sm-block">Calendar</span>
            <i className="d-sm-none bi-calendar3 fs-2" />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleFormsVisibility}>
            <span className="d-none d-sm-block">Forms</span>
            <i className="d-sm-none bi-file-text fs-2" />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleScoresVisibility}>
            <span className="d-none d-sm-block">Scores</span>
            <i className="d-sm-none bi-archive fs-2" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
