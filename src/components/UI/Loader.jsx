import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader flex justify-center items-center">
      <div className="w-screen h-screen fixed  z-30 bg-offwhite"></div>
      <span className="z-40 fixed">
        <FadeLoader color="#DD8560" height={15} width={5} loading />
      </span>
    </div>
  );
};

export default Loader;
