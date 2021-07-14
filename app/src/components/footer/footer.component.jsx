import "./footer.styles.scss";

const Footer = ({
  totalItems,
  showAll,
  showActive,
  showCompleted,
  clearCompleted,
  btnActive,
}) => {
  return (
    <div className="footer__container">
      <h4 className="item__desc">{`${totalItems} items left`}</h4>
      <div className="buttons__container">
        <button
          className={`item__desc footer__button ${
            btnActive === "All" ? "active" : null
          }`}
          onClick={showAll}
        >
          All
        </button>
        <button
          className={`item__desc footer__button ${
            btnActive === "Active" ? "active" : null
          }`}
          onClick={showActive}
        >
          Active
        </button>
        <button
          className={`item__desc footer__button ${
            btnActive === "Completed" ? "active" : null
          }`}
          onClick={showCompleted}
        >
          Completed
        </button>
      </div>
      <button className="item__desc footer__button" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
