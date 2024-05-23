import React, { useState, useReducer } from "react";
import "./App.css";
import Search from "./Search";
import Todo from "./Todo";
import Empty from "./Empty";
import CrudReducer from "./CrudReducer.js";

let initialData = JSON.parse(localStorage.getItem("Ali_TODOLIST_initialData"));
if (initialData == null) {
  localStorage.setItem(
    "Ali_TODOLIST_initialData",
    JSON.stringify([
      { id: 1, name: "Don't Worry", done: true },
      { id: 2, name: "Be Happy", done: true },
    ])
  );
  initialData = JSON.parse(localStorage.getItem("Ali_TODOLIST_initialData"));
}

function App() {
  const [data, dispatch] = useReducer(CrudReducer, initialData);
  const [input, setInput] = useState("");

  const handleSearch = (task) => !input || task.name.toLowerCase().includes(input.toLowerCase());


  const createElement = ({ id, name, done }) => (
    <Todo
      key={id}
      name={name}
      done={done}
      onChangeFunc={() => dispatch({ type: "check", id, done: !done })}
      onDeleteFunc={() => dispatch({ type: "delete", id })}
    />
  );

  const handleAdd = () => {
    const newId = data.length ? Math.max(...data.map(task => task.id)) + 1 : 1;
    dispatch({ type: "add", input, id: newId });
    setInput("");
  };

  const addButton = (
    <button
      className="addButton"
      onClick={handleAdd}
      style={{ display: !input ? "none" : "inline" }}
    >
      Add
    </button>
  );

  return (
    <>
      <Search input={input} setInput={setInput} />
      <section className="sectionStyle">
        {data.length === 0 ? (
          <>
            {addButton}
            <Empty />
          </>
        ) : (
          [...data.filter(handleSearch).map(createElement), addButton]
        )}
      </section>
    </>
  );
}

export default App;
