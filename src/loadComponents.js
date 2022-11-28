import createSidebar from './components/viewSidebar';
import { createTodoForm } from './components/viewForms';

export default function loadComponents() {
  const element = document.createElement('div');

  element.appendChild(createSidebar()); // Project form is part of the sidebar component
  element.appendChild(createTodoForm());

  return element;
}
