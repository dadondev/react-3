export const myTodos = [];
const todosMemory = (todosList) => {
  todosList.forEach((todo) => {
    myTodos.push(todo);
  });
};
console.log(myTodos);
export default todosMemory;
