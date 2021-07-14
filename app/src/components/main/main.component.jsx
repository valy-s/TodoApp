import { useState, useEffect } from "react";

import Header from "../header/header.component";
import AddTodo from "../addTodo/addTodo.component";
import TodoItem from "../todoItem/todoItem.component";
import Footer from "../footer/footer.component";
import LogOut from "../logout/logout.component";

import "./main.styles.scss";

const Main = ({ onSuccess }) => {
  const [allTodos, setAll] = useState([]);
  const [displayTodos, setDisplay] = useState(allTodos);
  const [activeButton, setActiveButton] = useState("All");
  const [itemsLeft, setItems] = useState(0);

  const handleChange = (e) => {
    const id = e.target.parentElement.dataset.id;
    const tempTodos = allTodos.map((todo) =>
      todo.id !== id ? { ...todo } : { ...todo, completed: !todo.completed }
    );
    setAll(tempTodos);
  };

  const handleClick = (e) => {
    const id = e.target.parentElement.parentElement.dataset.id;
    const tempTodos = allTodos.filter((todo) => todo.id !== id);
    setAll(tempTodos);
  };

  const handleAdd = (e) => {
    if (e.target.previousSibling.value === "") {
      alert("Please enter a value");
    } else {
      const newItem = {
        id: e.target.previousSibling.value,
        description: e.target.previousSibling.value,
        completed: false,
      };
      e.target.previousSibling.value = "";
      allTodos.push(newItem);
      const tempTodos = [...allTodos];
      setAll(tempTodos);
    }
  };

  const showAll = () => {
    setDisplay(allTodos);
    setActiveButton("All");
  };

  const showActive = () => {
    const tempTodos = allTodos.filter((todo) => todo.completed === false);
    setDisplay(tempTodos);
    setActiveButton("Active");
  };

  const showCompleted = () => {
    const tempTodos = allTodos.filter((todo) => todo.completed === true);
    setDisplay(tempTodos);
    setActiveButton("Completed");
  };

  const clearCompleted = () => {
    const tempTodos = allTodos.filter((todo) => todo.completed === false);
    setAll(tempTodos);
  };

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        const initialTodos = [];
        Object.keys(jsonResponse).map((item) =>
          initialTodos.push(jsonResponse[item])
        );
        setAll(initialTodos);
      });
  }, []);

  useEffect(() => {
    setDisplay(allTodos);
    if (activeButton === "All") {
      showAll();
    } else if (activeButton === "Active") {
      showActive();
    } else {
      showCompleted();
    }
    const tempTodos = allTodos.filter((todo) => todo.completed === false);
    setItems(tempTodos.length);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTodos]);

  return (
    <div className="main__container">
      <div className="logout__button">
        <LogOut onSuccess={onSuccess} />
      </div>
      <Header />
      <div className="content__container">
        <AddTodo onClick={handleAdd} />
        {displayTodos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            description={item.description}
            completed={item.completed}
            onChange={handleChange}
            handleClick={handleClick}
          />
        ))}
        <Footer
          totalItems={itemsLeft}
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          clearCompleted={clearCompleted}
          btnActive={activeButton}
        />
      </div>
    </div>
  );
};

export default Main;
