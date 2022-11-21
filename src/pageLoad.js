import sideBar from './sideBar';
import todoForm from './todoForm';

export default function pageLoad() {
  const element = document.createElement('div');

  element.appendChild(sideBar());
  element.appendChild(todoForm());

  return element;
}
