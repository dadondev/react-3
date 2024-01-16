import styles from "./todo.module.css";
function TodoListItem(obj) {
  const [id, text, completed] = obj;
  return (
    <div className={styles.todo}>
      <span className={styles.todoText}>{text}</span>
      <button className={styles.btn}>
        <img src="./x.svg" alt="close" />
      </button>
    </div>
  );
}
export default TodoListItem;
