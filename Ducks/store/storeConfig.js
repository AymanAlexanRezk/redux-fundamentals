import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './products'; //* reducer -> products

// const store = createStore(reducer, devToolsEnhancer);

// export default store; //* export a function creating the store
export default function storeConfig() {
  const store = createStore(reducer, devToolsEnhancer);
  return store;
}
