import createSidebar from './components/sideBar';
import { createProjectForm } from './components/setDom';

export default function loadComponents() {
  const element = document.createElement('div');

  element.appendChild(createSidebar());
  element.appendChild(createProjectForm());
  // element.appendChild(createTodoForm());

  return element;
}
