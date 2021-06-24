// import store from './store/store'; //* rename from store.js => storeConfig.js
// import store from './store/storeConfig';
import storeConfig from './store/storeConfig';

import * as creators from './store/products'; //* actionsCreators => store/products

const store = storeConfig(); //* Stored locally in this module

const unsubscribe = store.subscribe(() => {
  console.log('The Store has changed', store.getState());
});

store.dispatch(creators.productAdded('Product-1'));
// store.dispatch(creators.productRemoved(1));
store.dispatch(creators.productSold(1));

console.log(store.getState());
