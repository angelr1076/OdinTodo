const todoArray = [];

export default function todoFactory(title, description, dueDate, priority) {
  const todoProps = { title, description, dueDate, priority };

  return todoProps;
}

function listTodos(object) {
  todoArray.push(object);
  // console.log(todoArray);
  return todoArray;
}

export function createTodo(title, description, dueDate, priority) {
  return todoFactory(title, description, dueDate, priority);
}

export function addTodoToList(todo) {
  const addToList = listTodos(todo);
  return addToList;
}
