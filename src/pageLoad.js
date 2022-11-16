import navBar from './sideBar';
import todo from './todo';

export default function pageLoad() {
  const element = document.createElement('div');
  element.appendChild(navBar());
  element.appendChild(todo());

  return element;
}
