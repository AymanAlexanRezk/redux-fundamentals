//> Action Types: no need to export constants (Implementation details)
const PRODUCT_ADDED = 'productAdded';
const PRODUCT_REMOVED = 'productRemoved';
const PRODUCT_SOLD = 'productSold';

//> Actions Creators: remove actions prefix, role: export individual actions creators
export const productAdded = (description) => ({
  type: PRODUCT_ADDED,
  payload: {
    description,
  },
});

export const productRemoved = (id) => ({
  type: PRODUCT_REMOVED,
  payload: {
    id,
  },
});

export const productSold = (id) => ({
  type: PRODUCT_SOLD,
  payload: {
    id,
  },
});

//> Reducer: remove actions prefix, role: has to be a default export
let countId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [
        ...state,
        {
          id: ++countId,
          description: action.payload.description,
          sold: false,
        },
      ];

    case PRODUCT_SOLD:
      return state.map((product) =>
        product.id !== action.payload.id ? product : { ...product, sold: true }
      );

    case PRODUCT_REMOVED:
      return state.filter((product) => product.id !== action.payload.id);

    default:
      return state;
  }
}
