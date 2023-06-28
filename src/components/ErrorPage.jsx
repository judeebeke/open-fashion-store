import { useRouteError } from "react-router-dom";
import { GiHanger } from "react-icons/gi";
import Button from "./UI/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { flexCenter } from "../style";
import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  const error = useRouteError();

  let message = "Oops...";
  let action = "An Error Occurred!";

  if (error.status === 500) {
    message = error.statusText;
  }

  if (error.status === 404) {
    message = "Page not found!";
    action =
      "We can't find the page you are looking for, you may return to the ";
  }

  return (
    <Fragment>
      <Header />
      <div className={`${flexCenter} mt-24 flex-col px-8`}>
        <p className="mb-10 uppercase text-center">{message}</p>
        <i className="text-9xl text-secondary mb-3">
          <GiHanger />
        </i>
        <p className="text-center mb-8">{action}</p>
        <Button
          btnstyle={`w-auto h-auto bg-title text-base mb-8 md:text-lg text-offwhite ${flexCenter} gap-x-3 py-3 px-3 hover:bg-label hover:text-offwhite transition-all duration-500 ease-in-out`}
          to={`${error.status === 500 ? ".." : "/"}`}
        >
          <i className="text-offwhite">
            <AiOutlineArrowLeft />
          </i>
          {error.status === 500 ? "GO BACK" : "HOMEPAGE"}
        </Button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ErrorPage;
