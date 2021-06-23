import * as actions from './actionTypes';

export const productAdded = (description) => ({
  type: actions.PRODUCT_ADDED,
  payload: {
    description,
  },
});

export const productRemoved = (id) => ({
  type: actions.PRODUCT_REMOVED,
  payload: {
    id,
  },
});

export const productSold = (id) => ({
  type: actions.PRODUCT_SOLD,
  payload: {
    id,
  },
});
