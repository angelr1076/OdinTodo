import { projectArray } from './projects';

const viewProjectTodos = projectId => {
  // Divs and navbar containers
  const todosContainer = document.createElement('div');
  todosContainer.setAttribute('id', 'todosContainer');
  todosContainer.setAttribute('class', 'todos-container');

  const viewProjects = projectArray.filter(project => {
    if (project.id === projectId) {
      console.log(project.todos);
    }
    return;
  });

  return viewProjects;
  // return todosContainer;
};

export { viewProjectTodos };
