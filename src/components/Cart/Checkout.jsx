import { useState } from "react";
import CheckoutNext from "./CheckoutNext";
import CheckoutFirst from "./CheckoutFirst";
const Checkout = () => {
  const [checkoutNext, setCheckoutNext] = useState(false);

  const nextCheckoutHandler = () => {
    setCheckoutNext((prev) => !prev);
  };

  let content = "";

  if (checkoutNext) {
    content = <CheckoutNext onCheckNext={nextCheckoutHandler} />;
  } else {
    content = <CheckoutFirst onCheckNext={nextCheckoutHandler} />;
  }

  return <>{content}</>;
};

export default Checkout;
