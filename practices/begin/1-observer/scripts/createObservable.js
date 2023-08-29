export default function createObservable() {
  // 외부 접근 불가능
  const listeners = new Set(); // [fn, fn, fn, ...]

  const notify = (data) => {
    listeners.forEach((listener) => listener(data));
  };

  const subscribe = (listener) => {
    if (typeof listener !== 'function') {
      throw new Error('listener 타입은 함수만 가능합니다.');
    }
    listeners.add(listener);
  };

  const unsubscribe = (listener) => {
    if (typeof listener !== 'function') {
      throw new Error('listener 타입은 함수만 가능합니다.');
    }
    listeners.delete(listener);
  };

  // 외부 공개
  return Object.freeze({
    notify,
    subscribe,
    unsubscribe,
  });
}
