import { sub } from 'date-fns';

const createProjectForm = () => {
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('id', 'project-div');

  // Form
  const projectForm = document.createElement('form');
  projectForm.method = 'POST';
  projectForm.name = 'projectForm';
  projectForm.setAttribute('id', 'projectForm');
  projectForm.setAttribute('class', 'project-form');
  // Name div
  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'form-row');
  // Name label
  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('class', 'label');
  nameLabel.htmlFor = 'name';
  nameLabel.textContent = 'Project Name: ';
  // Name input
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = 'Build a recipe';
  nameInput.setAttribute('id', 'name');
  // Button container
  const submitBtnDiv = document.createElement('div');
  submitBtnDiv.setAttribute('class', 'button-container');
  // Submit button
  const submitBtn = document.createElement('input');
  submitBtn.type = 'Submit';
  submitBtn.value = 'Create Project';
  submitBtn.setAttribute('id', 'projectSubmitBtn');
  submitBtn.setAttribute('class', 'create-project btn');
  // Append to DOM
  projectDiv.appendChild(projectForm);
  projectForm.appendChild(nameDiv);
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);
  projectForm.appendChild(submitBtnDiv);
  submitBtnDiv.appendChild(submitBtn);

  return projectDiv;
};

const createTodoForm = () => {
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('id', 'todo-div');

  // Form
  const todoForm = document.createElement('form');
  todoForm.method = 'POST';
  todoForm.setAttribute('id', 'todoForm');
  todoForm.setAttribute('class', 'todo-form');
  // Divs
  const titleDiv = document.createElement('div');
  titleDiv.setAttribute('class', 'form-row');
  const descDiv = document.createElement('div');
  descDiv.setAttribute('class', 'form-row');
  const dateDiv = document.createElement('div');
  dateDiv.setAttribute('class', 'form-row');
  const priorityDiv = document.createElement('div');
  priorityDiv.setAttribute('class', 'form-row');
  const selectDiv = document.createElement('div');
  selectDiv.setAttribute('class', 'form-row');
  const submitBtnDiv = document.createElement('div');
  submitBtnDiv.setAttribute('class', 'button-container');
  // Title label
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('class', 'label');
  titleLabel.htmlFor = 'title';
  titleLabel.textContent = 'Title: ';
  // Title input
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.placeholder = 'Build a recipe';
  titleInput.setAttribute('id', 'title');

  // Description label
  const descLabel = document.createElement('label');
  descLabel.setAttribute('class', 'label');
  descLabel.htmlFor = 'description';
  descLabel.textContent = 'Description: ';
  // Description input
  const descInput = document.createElement('textarea');
  descInput.name = 'description';
  descInput.placeholder = 'blah blah blah...';
  // Rows 4 columns 50
  descInput.setAttribute('id', 'description');

  // Date label
  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('class', 'label');
  dateLabel.htmlFor = 'dueDate';
  dateLabel.textContent = 'Due Date: ';
  // Date input
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'dueDate';
  dateInput.placeholder = '01/01/2030';
  dateInput.setAttribute('id', 'dueDate');

  // Priority label
  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('class', 'label');
  priorityLabel.htmlFor = 'priority';
  priorityLabel.textContent = 'Priority: ';
  // Priority input
  const priorityInput = document.createElement('input');
  priorityInput.type = 'number';
  priorityInput.name = 'priority';
  priorityInput.placeholder = '1-3, low to high';
  priorityInput.setAttribute('id', 'priority');

  // Select list
  const selectList = document.createElement('select');
  selectList.setAttribute('id', 'project');
  // Submit button
  const submitBtn = document.createElement('input');
  submitBtn.type = 'Submit';
  submitBtn.value = 'Create Todo';
  submitBtn.setAttribute('id', 'todoSubmitBtn');
  submitBtn.setAttribute('class', 'create-todo btn');
  // Append to DOM
  todoDiv.appendChild(todoForm);
  todoForm.appendChild(titleDiv);
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);
  todoForm.appendChild(descDiv);
  descDiv.appendChild(descLabel);
  descDiv.appendChild(descInput);
  todoForm.appendChild(dateDiv);
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(dateInput);
  todoForm.appendChild(priorityDiv);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  todoForm.appendChild(selectDiv);
  selectDiv.appendChild(selectList);
  todoForm.appendChild(submitBtnDiv);
  submitBtnDiv.appendChild(submitBtn);

  return todoDiv;
};

export { createProjectForm, createTodoForm };
