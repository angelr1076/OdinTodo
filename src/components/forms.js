import { createTodo, addTodoToList } from './todos';
import { createProject, addProjectToList } from './projects';

const submitProjectForm = element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    const name = document.querySelector('#name').value || 'Default project';

    // Create new project
    const newProject = createProject(name, []);
    addProjectToList(newProject);
  });
};

const submitTodoForm = element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    const title =
      document.querySelector('#title').value || 'Cupcake ipsum dolor ';
    const description =
      document.querySelector('#description').value ||
      'Macaroon gummi bears cake pie cheesecake oat cake. Cheesecake sweet roll topping jelly-o muffin I love.';
    const dueDate = document.querySelector('#dueDate').value || '10/11/2024';
    const priority = document.querySelector('#priority').value || '1';

    // Create new todo
    const newTodo = createTodo(title, description, dueDate, priority);
    // Push the new todo to the todo list
    addTodoToList(newTodo);
  });
};

export { submitProjectForm, submitTodoForm };
