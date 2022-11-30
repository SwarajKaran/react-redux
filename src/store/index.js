import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCR') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'INCREASE') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'DECR') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'TOGGLE') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };
// store.subscribe(counterSubscriber);
// store.dispatch({ type: 'INCR' });
// store.dispatch({ type: 'DECR' });
