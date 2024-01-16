import { useState } from "react";
import styles from "./form.module.css";
import todosMemory from "../list/todosMemory";
import TodosList from "../list/Todos";

function Form() {
  const [todos, setTodos] = useState([]);
  // -----
  const [text, setText] = useState();
  const handleText = (e) => {
    setText(e.target.value);
  };
  // -------
  const sendTodo = () => {
    const copyTodos = [...todos];
    const obj = {
      id: Math.ceil(Math.random() * 100000),
      text: text,
      completed: false,
    };

    copyTodos.push(obj);
    setTodos(copyTodos);
    todosMemory(copyTodos);
  };

  // --------------
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTodo();
      }}
      className={styles.form}
    >
      <input
        type="text"
        onChange={handleText}
        className={styles.input}
        placeholder="Create a new todo…"
      />
    </form>
  );
}
export default Form;
