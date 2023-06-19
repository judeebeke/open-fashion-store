import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./UI/Loader";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      {navigation.state === "loading" && <Loader />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
