export function showElement(element) {
  element.classList.remove('hidden');
  element.classList.add('show');
}

export function hideElement(element) {
  element.classList.remove('show');
  element.classList.add('hidden');
}
