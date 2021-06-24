import * as actions from './actionTypes';

let countId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.PRODUCT_ADDED:
      return [
        ...state,
        {
          id: ++countId,
          description: action.payload.description,
          sold: false,
        },
      ];

    case actions.PRODUCT_SOLD:
      return state.map((product) =>
        product.id !== action.payload.id ? product : { ...product, sold: true }
      );

    case actions.PRODUCT_REMOVED:
      return state.filter((product) => product.id !== action.payload.id);

    default:
      return state;
  }
}
