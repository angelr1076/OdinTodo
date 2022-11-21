import { sub } from 'date-fns';
import todo from './todo';

export default function todoForm() {
  const form = document.createElement('div');
  form.setAttribute('id', 'todo-div');

  form.innerHTML = `
      <form action="" method="POST" name="form" id="form" class="form">
        <div class="form-row">
          <label for="title" class="label">title: </label>
          <input type="text" name="title" id="title" placeholder="Build a recipe">
        </div>
        <div class="form-row">
          <label for="description" class="label">description: </label>
          <textarea name="description" id="description" rows="4" cols="50" placeholder="blah blah blah..."></textarea>
        </div>
        <div class="form-row">
          <label for="priority" class="label">dueDate: </label>
          <input type="date" name="dueDate" id="dueDate" placeholder="10/11/2030">
        </div>
        <div class="form-row">
          <label for="priority" class="label">priority: </label>
          <input type="number" name="priority" id="priority" placeholder="1-3, low to high">
        </div>
        <div class="button-container">
          <input type="submit" value="Create Todo" id="submitBtn" class="createTodo btn">
        </div>
      </form>
    `;

  return form;
}

function submitForm(element) {
  element.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.value);
  });

  return submitButton;
}

export { submitForm };
