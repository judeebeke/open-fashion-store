import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader flex justify-center items-center">
      <div className="w-screen h-screen fixed filter blur-md opacity-50 z-40 bg-offwhite"></div>
      <span className="z-50 fixed">
        <FadeLoader color="#DD8560" height={15} width={5} loading />
      </span>
    </div>
  );
};

export default Loader;
