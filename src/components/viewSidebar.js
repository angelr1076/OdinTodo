import '../styles/style.css';
import { createProjectForm } from './viewForms';
import { projectArray } from './projects';
import { handleProjectView } from './eventHandlers';

const createSidebar = () => {
  // Divs and navbar containers
  const sidebarContainer = document.createElement('div');
  sidebarContainer.setAttribute('id', 'sidebarContainer');
  sidebarContainer.setAttribute('class', 'sidebar-container');

  // Home
  const homeEl = document.createElement('div');
  const homeTitle = document.createElement('h3');
  homeTitle.textContent = 'Home';
  homeEl.appendChild(homeTitle);

  // Projects
  const projectsList = document.createElement('ul');
  projectsList.setAttribute('class', 'project-list');

  projectArray.forEach(project => {
    const projectsListItem = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.setAttribute('data-attribute', `${project.id}`);
    projectBtn.setAttribute('class', 'project-button');
    handleProjectView(projectBtn, project);
    // Add an anchor for each item
    projectBtn.innerHTML = project.name;
    projectsListItem.append(projectBtn);
    projectsList.append(projectsListItem);
  });

  // console.log(projects);
  const projectsEl = document.createElement('div');
  const projectsTitle = document.createElement('h3');

  projectsTitle.textContent = 'Projects';
  projectsEl.appendChild(projectsTitle);
  projectsEl.appendChild(projectsList);
  projectsEl.appendChild(createProjectForm());

  // Append to DOM
  sidebarContainer.appendChild(homeEl);
  sidebarContainer.appendChild(projectsEl);

  return sidebarContainer;
};

export { createSidebar };
