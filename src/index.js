import './styles/style.css';
import loadComponents from './loadComponents';
import { submitProjectForm } from './components/forms';

function component() {
  // Create div with an ID of 'domContent'
  const domEl = document.createElement('div');
  domEl.setAttribute('id', 'domContent');
  domEl.setAttribute('class', 'dom-content flex');

  domEl.appendChild(loadComponents());

  return domEl;
}

document.body.appendChild(component());

(function createEventListeners() {
  const submitProjectBtn = document.querySelector('#projectSubmitBtn');
  submitProjectForm(submitProjectBtn);
})();
