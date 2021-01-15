import './index.css';
export default function () {
  const element = document.createElement('div');
  element.innerHTML = 'hello webpack';
  element.classList.add('hello');
  return element;
}