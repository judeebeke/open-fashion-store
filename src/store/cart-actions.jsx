import axios from "axios";
import { json } from "react-router-dom";
import { cartActions } from "./cart-slice";

export const sendCart = (data) => {
  return async () => {
    try {
      const options = {
        method: "PUT",
        url: `https://open-fashion-55eda-default-rtdb.firebaseio.com/cart.json`,
        data: JSON.stringify(data),
      };
      const response = await axios.request(options);
      return response;
    } catch (error) {
      throw json({ message: null }, { status: 500, statusText: error.message });
    }
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: `https://open-fashion-55eda-default-rtdb.firebaseio.com/cart.json`,
      };

      const response = await axios.request(options);
      let data = response.data;
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalPrice: data.totalPrice,
          totalQuantity: data.totalQuantity,
        })
      );
      return response;
    } catch (error) {
      throw json({ message: null }, { status: 500, statusText: error.message });
    }
  };
};
