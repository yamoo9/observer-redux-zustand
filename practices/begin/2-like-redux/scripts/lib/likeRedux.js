// createStore 함수 로직을 작성한 후 내보냅니다.

// Store
function createStore(reducer, initialState = {}) {
  // #state (비공개)
  let state = initialState; // { count: 1 }
  let listeners = [];

  // GETTER
  const getState = () => state;

  // SETTER
  const dispatch = (action /* { type, payload(data)? } */) => {
    state = reducer(state, action); // prevState => nextState
    listeners.forEach((listner) => listner());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => listeners.filter((l) => !Object.is(l, listener));
  };

  const store = { getState, dispatch, subscribe };

  return store;
}

// 초깃값
const initialCountState = { count: 1 };

// 리듀서 (순수) 함수
const countReducer = (state = initialCountState, action) => {};

// 스토어 생성
const store = createStore(countReducer, initialCountState);
// store = { getState, dispatch, subscribe }

// combineReducers 함수 로직을 작성한 후 내보냅니다.
