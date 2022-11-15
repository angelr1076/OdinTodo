import navBar from './sideBar';

export default function pageLoad() {
  const element = document.createElement('div');
  element.appendChild(navBar());

  return element;
}
