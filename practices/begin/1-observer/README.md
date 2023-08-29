# STEP 1

```jsx
// Observable 정의
// "구독 가능한" 객체
// #subscriptors (Set)
// .notify()
// .subscribe()
// .unsubscribe()
// Redux, Zustand
const observable = {
  notify() {},
  subscribe() {},
  unsubscribe() {},
};

console.log(observable);

// Observer 작성
// 구독 가능한 객체를 "구독"하는 함수
// React Component
function observer(data) {}

observable.subscribe(observer); // 구독!
observable.notify('amazing!');
observable.notify('amazing!');
observable.unsubscribe(observer); // 구독 취소!
observable.notify('amazing!');
observable.notify('amazing!');
observable.notify('amazing!');

```

# STEP 2

```jsx
import createObservable from './createObservable.js';

const observable = createObservable();

function render(data) {
  console.log('render', data);
}

function draw(data) {
  console.log('draw', data);
}

function trigger(data) {
  console.log('trigger', data);
}

observable.subscribe(render); // 구독
observable.subscribe(draw); // 구독
observable.subscribe(trigger); // 구독

setTimeout(() => {
  observable.notify('1s');
}, 1000);

setTimeout(() => {
  observable.notify('3s');
  observable.unsubscribe(trigger); // 구독 취소
}, 3000);

setTimeout(() => {
  observable.notify('5s');
}, 5000);
```