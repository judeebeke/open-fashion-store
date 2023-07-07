import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./UI/Loader";
import CartModal from "./Cart/Cart";
import { useSelector } from "react-redux";

const Root = () => {
  const cartActive = useSelector((state) => state.ui.cartActive);

  const navigation = useNavigation();

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
