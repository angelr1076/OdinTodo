export default function todo() {
  const element = document.createElement('div');
  element.setAttribute('id', 'todo-container');

  const h1 = document.createElement('h1');
  h1.textContent = `todo`;

  element.appendChild(h1);

  return element;
}
