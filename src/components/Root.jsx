import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./UI/Loader";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      {navigation.state === "loading" && <Loader />}
      <Outlet />
    </div>
  );
};

export default Root;
