import todoFactory, { listTodos, createTodo, addTodoToList } from './todos';

export default function submitForm(element) {
  element.addEventListener('click', e => {
    e.preventDefault();
    const title =
      document.querySelector('#title').value || 'Cupcake ipsum dolor ';
    const description =
      document.querySelector('#description').value ||
      'Macaroon gummi bears cake pie cheesecake oat cake. Cheesecake sweet roll topping jelly-o muffin I love.';
    const dueDate = document.querySelector('#dueDate').value || '10/11/2024';
    const priority = document.querySelector('#priority').value || '1';

    const newTodo = createTodo(title, description, dueDate, priority);
    listTodos(newTodo);
    addTodoToList(newTodo);
  });
}
