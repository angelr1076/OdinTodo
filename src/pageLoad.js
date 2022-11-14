import navBar from './navbar';

export default function pageLoad() {
  const element = document.createElement('div');
  element.appendChild(navBar());

  return element;
}
