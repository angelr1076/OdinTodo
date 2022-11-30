import './styles/style.css';
import loadComponents from './loadComponents';
import {
  handleSubmitProject,
  handleSubmitTodo,
} from './components/eventHandlers';
import { renderProjectList } from './components/projects';

function component() {
  // Create div with an ID of 'domContent'
  const mainContainer = document.createElement('div'); // MAIN DIV
  mainContainer.setAttribute('id', 'main');
  mainContainer.setAttribute('class', 'main');

  mainContainer.appendChild(loadComponents());

  return mainContainer;
}

document.body.appendChild(component());

handleSubmitProject();
handleSubmitTodo();
renderProjectList();
