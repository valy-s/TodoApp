import Add from "../../assets/icon-add.svg";

import "./addTodo.styles.scss";

const AddTodo = ({ onClick }) => {
  return (
    <div className="item__container item__container-add">
      <div className="item__body item__body-add">
        <input type="text" className="todo__add" placeholder="Add todo" />
        <img
          src={Add}
          className="todo__add-button"
          alt="add-item"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default AddTodo;
