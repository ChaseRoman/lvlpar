import "./Forms.scss";

const Forms = () => {
  const IFRAME_SOURCES = [
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSfloZupPBBry8TfQrHNIIS5KuJAcJrgKqw5ajDAZKRos9ycgg/viewform?embedded=true",
      header: "March",
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSfEc07lhcq2EOp5o7xnRqoNtzGBX8R0Rnoy8Es27XCE_OeYhA/viewform?embedded=true",
      header: "April",
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSdPTLWT8-uX5HLfKl4KrqmonbJh07YCDKfZHISEhBZHu2KBpA/viewform?embedded=true",
      header: "May",
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSdmQ452rFGw7dRf5FPcyW-vhc8L7tuLve2SNh_3uJEzve0gaA/viewform?embedded=true",
      header: "June",
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSd3SdzqJDYd4lBAIPOwM657uSXScpjeus0Eog4RIlycLjMCqw/viewform?embedded=true",
      header: "July",
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSeN-GTord-Z-qgbkBN5XJH7yZKuX5QZx0crlkz4QoEmizjhFQ/viewform?embedded=true",
      header: "August",
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSfXr2Altnl4xBpEz5hNXpj5ykZbqtLLplCfKJgmzVfL-dJDiw/viewform?embedded=true",
      header: "September",
    },
  ];

  return (
    <div className="row justify-content-center">
      <div
        className="Forms accordion col col-sm-10 col-md-8"
        id="formsAccordion"
      >
        {IFRAME_SOURCES.map(({ src, header }, i) => {
          return (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header">
                <button
                  className={"accordion-button collapsed"}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + header}
                  aria-expanded="false"
                  aria-controls={"collapse" + header}
                >
                  <strong>{header}</strong>
                </button>
              </h2>
              <div
                id={"collapse" + header}
                className={"accordion-collapse collapse"}
                data-bs-parent="#formsAccordion"
              >
                <div className="accordion-body">
                  <div className="Form">
                    <iframe
                      title={header + " Form"}
                      src={src}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forms;
