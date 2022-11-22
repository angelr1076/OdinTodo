import createSidebar from './components/sideBar';
import createTodoForm from './components/todoForm';

export default function loadComponents() {
  const element = document.createElement('div');

  element.appendChild(createSidebar());
  element.appendChild(createTodoForm());

  return element;
}
