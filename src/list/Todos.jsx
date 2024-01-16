import TodoListItem from "../listItem/Todo";
import styles from "./todos.module.css";
import { myTodos } from "./todosMemory";

function TodosList() {
  return (
    <div className={styles.todos}>
      {myTodos.map((todo) => {
        <TodoListItem obj={todo} />;
      })}
    </div>
  );

  // return ldknclkndkl
}
export default TodosList;
