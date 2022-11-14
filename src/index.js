import './styles/style.css';
import pageLoad from './pageLoad';

function component() {
  // Create div with an ID of 'content'
  const element = document.createElement('div');
  element.setAttribute('id', 'content');
  element.setAttribute('class', 'content flex');
  element.appendChild(pageLoad());

  return element;
}

document.body.appendChild(component());
