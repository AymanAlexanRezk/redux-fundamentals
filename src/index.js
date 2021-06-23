import store from './store';
import * as creators from './actionsCreators';

const unsubscribe = store.subscribe(() => {
  console.log('The Store has changed', store.getState());
});

store.dispatch(creators.productAdded('Product-1'));
// store.dispatch(creators.productRemoved(1));
store.dispatch(creators.productSold(1));

console.log(store.getState());
