import Order from '../../models/order';

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';

export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch) => {
    const createdDate = new Date().toISOString();
    const response = await fetch(
      'https://rn-shop-app-ca7f8.firebaseio.com/orders/u1.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: createdDate,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Error occured.');
    }

    const resData = await response.json();

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.id,
        items: cartItems,
        amount: totalAmount,
        date: createdDate,
      },
    });
  };
};

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://rn-shop-app-ca7f8.firebaseio.com/orders/u1.json'
      );

      if (!response.ok) {
        throw new Error('Error occured.');
      }

      const resData = await response.json();
      const loadedOrders = [];
      for (const key in resData) {
        loadedOrders.push(
          new Order(
            key,
            resData[key].cartItems,
            resData[key].totalAmount,
            new Date(resData[key].date)
          )
        );
      }

      dispatch({
        type: SET_ORDERS,
        orders: loadedOrders,
      });
    } catch (err) {
      throw err;
    }
  };
};
