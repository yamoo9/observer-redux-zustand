import createObservable from './createObservable.js';

const observable = createObservable();

/* -------------------------------------------------------------------------- */

const container = document.querySelector('.container');
const listElement = container.querySelector('.list');
const output = document.querySelector('.output');

const handleClick = (e) => {
  if (e.target.matches('button')) {
    const data = listElement.children.length + 1;
    observable.notify(data);
  }
};

container.addEventListener('click', handleClick);

// 구독자(청취자) 함수

function renderList(data) {
  const newListItem = document.createElement('li');
  newListItem.textContent = `아이템 ${data}`;
  listElement.append(newListItem);
}

function renderOutput(data) {
  output.textContent = String(data);
}

function changeBgColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor = `
    rgb(${r},${g},${b})
  `;
}

// 구독
observable.subscribe(renderList);
observable.subscribe(renderOutput);
observable.subscribe(changeBgColor);
