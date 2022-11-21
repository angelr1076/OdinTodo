import './styles/style.css';
import pageLoad from './pageLoad';
import { submitForm } from './todoForm';

function component() {
  // Create div with an ID of 'domContent'
  const domEl = document.createElement('div');
  domEl.setAttribute('id', 'domContent');
  domEl.setAttribute('class', 'dom-content flex');

  domEl.appendChild(pageLoad());

  const submitButton = document.querySelector('#submitBtn');
  submitForm(submitButton);

  return domEl;
}

document.body.appendChild(component());
