import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status, error.statusText);

  let title = "An Error Occurred!";
  let message = "Oops...";

  if (error.status === 500) {
    message = error.statusText;
  }

  if (error.status === 404) {
    message = "Page not found!";
  }

  return (
    <div className="center">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
