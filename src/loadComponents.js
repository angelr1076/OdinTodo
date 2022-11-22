import createSidebar from './components/sideBar';
import createTodoForm from './components/setDom';

export default function loadComponents() {
  const element = document.createElement('div');

  element.appendChild(createSidebar());
  element.appendChild(createTodoForm());

  return element;
}
