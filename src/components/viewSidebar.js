import '../styles/style.css';
import { createProjectForm } from './viewForms';
import { projectArray } from './projects';

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

  projectArray.forEach(project => {
    let projectsListItem = document.createElement('li');
    let projectAnchor = document.createElement('a');
    // projectAnchor.setAttribute('href', 'https://test.com');
    // Add an anchor for each item
    projectAnchor.innerHTML = project.name;
    projectsListItem.append(projectAnchor);
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
