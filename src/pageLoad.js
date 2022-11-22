import sideBar from './sideBar';
import todoForm from './todoForm';

export default function pageLoad() {
  const element = document.createElement('div');

  element.appendChild(sideBar());
  element.appendChild(todoForm());

  const submitBtn = document.querySelector('#submitBtn');
  console.log(typeof submitBtn);
  // submitBtn.addEventListener('click', e => console.log(e.target));

  return element;
}
