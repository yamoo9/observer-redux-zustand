export default function createObservable() {
  // 외부 접근 불가능
  // const listeners = new Set(); // [fn1, fn, fn, ...]
  let listeners = []; // [fn1, fn, fn1, ...]

  const notify = (data) => {
    listeners.forEach((listener) => listener(data));
  };

  const subscribe = (listener) => {
    if (typeof listener !== 'function') {
      throw new Error('listener 타입은 함수만 가능합니다.');
    }
    listeners.push(listener);
  };

  const unsubscribe = (listener) => {
    if (typeof listener !== 'function') {
      throw new Error('listener 타입은 함수만 가능합니다.');
    }
    listeners = listeners.filter((l) => l !== listener);
  };

  // 외부 공개
  return Object.freeze({
    notify,
    subscribe,
    unsubscribe,
  });
}
