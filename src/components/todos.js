export default function todoFactory(title, description, dueDate, priority) {
  const todoProps = { title, description, dueDate, priority };

  return todoProps;
}

export function listTodos(object) {
  const todoArray = [];
  todoArray.push([
    todoFactory(
      'Candy canes gingerbread',
      ' I love pie I love I love macaroon jelly-o jujubes. I love gummi bears muffin tootsie roll tiramisu.',
      '10/11/2024',
      '1',
    ),
    todoFactory(
      'Chocolate cake gummi bears',
      'Cake donut chupa chups sesame snaps apple pie lemon drops ice cream halvah.',
      '10/11/2024',
      '1',
    ),
    object,
  ]);

  return todoArray;
}

export function createTodo(title, description, dueDate, priority) {
  return todoFactory(title, description, dueDate, priority);
}

export function addTodoToList(todo) {
  const addToList = listTodos(todo);
  console.log(addToList);
  return addToList;
}
