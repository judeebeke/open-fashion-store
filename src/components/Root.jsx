import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./UI/Loader";
import CartModal from "./Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCart, sendCart } from "../store/cart-actions";

const Root = () => {
  const cartActive = useSelector((state) => state.ui.cartActive);
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isChangedData = useSelector((state) => state.cart.isChangedData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (!isChangedData) {
      dispatch(fetchCart());
    }
  }, [isChangedData, dispatch]);

  useEffect(() => {
    if (isChangedData) {
      dispatch(
        sendCart({
          items: cartItems,
          totalPrice: totalPrice,
          totalQuantity: totalQuantity,
        })
      );
    }
  }, [cartItems, dispatch, totalPrice, totalQuantity, isChangedData]);

  return (
    <div>
      {cartActive && <CartModal />}
      <Header />
      {navigation.state === "loading" && <Loader />}
      <Outlet />
    </div>
  );
};

export default Root;
