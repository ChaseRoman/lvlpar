import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Scores from "./components/Scores";

function App() {
  const [homeVisible, setHomeVisibility] = useState(true);
  const [calendarVisible, setCalendarVisibility] = useState(false);
  const [formsVisible, setFormsVisibility] = useState(false);
  const [scoresVisible, setScoresVisibility] = useState(false);

  const resetVisibility = () => {
    setHomeVisibility(false);
    setCalendarVisibility(false);
    setFormsVisibility(false);
    setScoresVisibility(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav
          handleHomeVisibility={() => {
            resetVisibility();
            setHomeVisibility(true);
          }}
          handleCalendarVisibility={() => {
            resetVisibility();
            setCalendarVisibility(true);
          }}
          handleFormsVisibility={() => {
            resetVisibility();
            setFormsVisibility(true);
          }}
          handleScoresVisibility={() => {
            resetVisibility();
            setScoresVisibility(true);
          }}
        />
      </header>
      {homeVisible && <Home />}
      {calendarVisible && <Calendar />}
      {formsVisible && <Forms />}
      {scoresVisible && <Scores />}
    </div>
  );
}

export default App;
