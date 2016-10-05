import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
//import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions';
import App from './components/App';
let store = createStore(todoApp, window.STATE_FROM_SERVER);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// Test that store works
// // Logs initial state
// console.log('Initial State', store.getState());
//
// // Log state change subscribe() returns a function to unregister
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
//
// // Dispatch actions
// store.dispatch(addTodo('lesson one'));
// store.dispatch(addTodo('lesson two'));
// store.dispatch(addTodo('lesson three'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
//
// // stop listening
// unsubscribe();
