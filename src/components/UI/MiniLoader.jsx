import { FadeLoader } from "react-spinners";

const MiniLoader = () => {
  return (
    <span className="w-full h-24 py-5 bg-offwhite flex justify-center items-center mx-auto">
      <FadeLoader color="#DD8560" height={15} width={5} loading />
    </span>
  );
};

export default MiniLoader;
