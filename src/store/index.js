import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action === 'INCR') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action === 'DECR') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };
// store.subscribe(counterSubscriber);
// store.dispatch({ type: 'INCR' });
// store.dispatch({ type: 'DECR' });
