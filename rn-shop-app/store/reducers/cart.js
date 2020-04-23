import { ADD_TO_CART } from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let updatedOrNewCardItem;

      if (state.items[addedProduct.id]) {
        updatedOrNewCardItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCardItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      debugger;
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCardItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    default:
      return state;
  }
};