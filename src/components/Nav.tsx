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
      <ul className="nav col col-sm-10 col-md-8 justify-content-center justify-content-sm-start">
        <li className="nav-item">
          <button className="nav-link" onClick={handleHomeVisibility}>
            <span className="d-none d-sm-block">Home</span>
            <i className="d-sm-none bi-house" />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleCalendarVisibility}>
            <span className="d-none d-sm-block">Calendar</span>
            <i className="d-sm-none bi-calendar3" />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleFormsVisibility}>
            <span className="d-none d-sm-block">Forms</span>
            <i className="d-sm-none bi-file-text" />
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleScoresVisibility}>
            <span className="d-none d-sm-block">Scores</span>
            <i className="d-sm-none bi-archive" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
