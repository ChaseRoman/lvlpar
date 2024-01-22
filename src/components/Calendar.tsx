import "./Calendar.scss";

const Calendar = () => {
  return (
    <div className="row justify-content-center">
      <div className="Calendar text-center col col-md-10 col-lg-9">
        <iframe
          title="Calendar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showPrint=0&showDate=1&showCalendars=0&showTabs=0&showTz=0&src=N2IxZWJjNmZlOGI1OGE1YjVhNzYwYTVlZTY4ZjAzNDliOWJjMGJhYzAxYTNkNzIyNWU4ZDljMmM1MjczNjNlZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043"
          height="600"
          className="w-100"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
