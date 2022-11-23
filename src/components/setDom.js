import { sub } from 'date-fns';

const createProjectForm = () => {
  const projectForm = document.createElement('div');
  projectForm.setAttribute('id', 'project-div');

  projectForm.innerHTML = `
      <form action="" method="POST" name="projectForm" id="projectForm" class="projectForm">
        <div class="form-row">
          <label for="name" class="label">Project Name: </label>
          <input type="text" name="name" id="name" placeholder="Build a recipe">
        </div>
        <div class="button-container">
          <input type="submit" value="Create Project" id="projectSubmitBtn" class="create-project btn">
        </div>
      </form>
    `;

  return projectForm;
};

const createTodoForm = () => {
  const todoForm = document.createElement('div');
  todoForm.setAttribute('id', 'todo-div');

  todoForm.innerHTML = `
      <form action="" method="POST" name="todoForm" id="todoForm" class="todoForm">
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
          <input type="submit" value="Create Todo" id="todoSubmitBtn" class="create-todo btn">
        </div>
      </form>
    `;

  return todoForm;
};

export { createProjectForm, createTodoForm };
