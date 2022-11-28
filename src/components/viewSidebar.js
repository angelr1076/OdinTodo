import '../styles/style.css';
import { createProjectForm } from './viewForms';

export default function createSidebar() {
  // Divs and navbar containers
  const sidebarContainer = document.createElement('div');
  sidebarContainer.setAttribute('id', 'sidebarDiv');
  sidebarContainer.setAttribute('class', 'sidebar-div');

  // Home
  const homeEl = document.createElement('div');
  const homeTitle = document.createElement('h3');
  homeTitle.textContent = 'Home';
  homeEl.appendChild(homeTitle);

  // Projects
  const projectsEl = document.createElement('div');
  const projectsTitle = document.createElement('h3');
  projectsTitle.textContent = 'Projects';
  projectsEl.appendChild(projectsTitle);
  projectsEl.appendChild(createProjectForm());

  // Append to DOM
  sidebarContainer.appendChild(homeEl);
  sidebarContainer.appendChild(projectsEl);

  return sidebarContainer;
}
