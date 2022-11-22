import { sub } from 'date-fns';

export default function createTodoForm() {
  const form = document.createElement('div');
  form.setAttribute('id', 'todo-div');

  form.innerHTML = `
      <form action="" method="POST" name="form" id="form" class="form">
        <div class="form-row">
          <label for="title" class="label">Title: </label>
          <input type="text" name="title" id="title" placeholder="Build a recipe">
        </div>
        <div class="form-row">
          <label for="description" class="label">Description: </label>
          <textarea name="description" id="description" rows="4" cols="50" placeholder="blah blah blah..."></textarea>
        </div>
        <div class="form-row">
          <label for="dueDate" class="label">Due Date: </label>
          <input type="date" name="dueDate" id="dueDate" placeholder="10/11/2030">
        </div>
        <div class="form-row">
          <label for="priority" class="label">Priority: </label>
          <input type="number" name="priority" id="priority" placeholder="1-3, low to high">
        </div>
        <div class="button-container">
          <input type="submit" value="Create Todo" id="submitBtn" class="createTodo btn">
        </div>
      </form>
    `;

  return form;
}
