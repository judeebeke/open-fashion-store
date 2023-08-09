import { Suspense, useEffect, lazy } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./UI/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, sendCart } from "../store/cart-actions";
const CartModal = lazy(() => import("./Cart/Cart"));
import { ToastContainer } from "react-toastify";

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
      {cartActive && (
        <Suspense fallback={<Loader />}>
          <CartModal />
        </Suspense>
      )}
      <Header />
      {navigation.state === "loading" && <Loader />}
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
