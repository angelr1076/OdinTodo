const todoArray = [];
// Create a new todo
const createTodo = (title, description, dueDate, priority) => {
  const todoProps = { title, description, dueDate, priority };

  return todoProps;
};

const listTodos = object => {
  todoArray.push(object);

  return todoArray;
};

const addTodoToList = todo => {
  const addToList = listTodos(todo);
  console.log(todoArray);
  return { addToList, todoArray };
};

export { createTodo, addTodoToList };
