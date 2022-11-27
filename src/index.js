import './styles/style.css';
import loadComponents from './loadComponents';
import { handleSubmitProject, handleSubmitTodo } from './components/listeners';
import { renderProjectList } from './components/projects';

function component() {
  // Create div with an ID of 'domContent'
  const domEl = document.createElement('div');
  domEl.setAttribute('id', 'domContent');
  domEl.setAttribute('class', 'dom-content flex');

  domEl.appendChild(loadComponents());

  return domEl;
}

document.body.appendChild(component());

handleSubmitProject();
handleSubmitTodo();
renderProjectList();
