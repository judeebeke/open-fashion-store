import axios from "axios";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

import { uiActions } from "./ui-slice";

export const sendSelectedImage = (data) => {
  return async () => {
    try {
      const options = {
        method: "PUT",
        url: `https://open-fashion-55eda-default-rtdb.firebaseio.com/selected-product-image.json`,
        data: JSON.stringify(data),
      };

      const response = await axios.request(options);
      return response;
    } catch (error) {
      throw json({ message: null }, { status: 500, statusText: error.message });
    }
  };
};

export const fetchSelectedImage = () => {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: `https://open-fashion-55eda-default-rtdb.firebaseio.com/selected-product-image.json`,
      };

      const response = await axios.request(options);
      let data = response.data;
      dispatch(
        uiActions.getSelectedProductImage({ image: data.image, id: data.id })
      );
      return response;
    } catch (error) {
      throw json({ message: null }, { status: 500, statusText: error.message });
    }
  };
};

export const handleOrderNotification = () => {
  toast("Successfully Placed an Order!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
