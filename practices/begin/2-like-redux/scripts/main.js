/* DOM Elements ------------------------------------------------------------- */

const form = document.querySelector('.form');
const output = document.querySelector('.output');
const listElement = document.querySelector('.list');

/* Functions ---------------------------------------------------------------- */

function renderList() {
  // store에서 list 상태를 가져옵니다.
  const list = [];

  cleanUpList();

  const markup = list
    .map(
      (item) => `
      <li data-id="${item.id}">
        ${item.title}
        <button type="button" class="button">삭제</button>
      </li>
    `
    )
    .join('');

  listElement.innerHTML = markup;
}

function cleanUpList() {
  listElement.innerHTML = '';
}

function cleanUpForm() {
  form.newItem.value = '';
}

function renderCount() {
  // store에서 count 상태를 가져옵니다.
  const count = 0;

  output.textContent = String(count);
}

/* Subscription ------------------------------------------------------------- */

// renderCount, renderList 함수에서 store를 구독합니다.

/* Notification ------------------------------------------------------------- */

function handleAddItem(e) {
  e.preventDefault();

  const newItem = e.target.newItem;

  if (!newItem.value.trim()) {
    alert('추가할 항목을 입력해야 합니다.');
    return newItem.select();
  }

  // 새로운 아이템이 추가되었음을 store에 알립니다.
  // 추가된 아이템 갯수만큼 count 상태가 증가되어야 함을 store에 알립니다.

  cleanUpForm();
}

form?.addEventListener('submit', handleAddItem);

/* App ---------------------------------------------------------------------- */

function render() {
  renderList();
  renderCount();
}

function app() {
  render();

  listElement.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
      const { id } = e.target.parentElement.dataset;

      // 아이템이 삭제되었음을 store에 알립니다.
      // 삭제된 아이템 갯수만큼 count 상태가 감소되어야 함을 store에 알립니다.
    }
  });
}

app();
