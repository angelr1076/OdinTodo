import { createSidebar } from './components/viewSidebar';
import { createTodoForm } from './components/viewForms';
import { createNavbar } from './components/viewNavbar';

export default function loadComponents() {
  const element = document.createElement('div');
  element.setAttribute('class', 'content');

  element.appendChild(createNavbar());
  element.appendChild(createSidebar()); // Project form is part of the sidebar component
  element.appendChild(createTodoForm());

  return element;
}
