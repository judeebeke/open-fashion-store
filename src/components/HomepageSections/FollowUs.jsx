import { AiOutlineInstagram } from "react-icons/ai";
import { followUs } from "../../store/localdata";
import useImageResizer from "../Utils/useImageResizer";
import { useEffect } from "react";

const FollowUs = () => {
  const { compressedProductData, imagesCompressor: compressImages } =
    useImageResizer();

  useEffect(() => {
    compressImages(followUs);
  }, [compressImages]);

  return (
    <section className="flex justify-center items-center text-center flex-col py-12 px-6">
      <h2 className="text-2xl text-body uppercase">FOLLOW US</h2>
      <i className="text-3xl text-body py-4">
        <AiOutlineInstagram />
      </i>
      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-y-5 md:gap-5 lg:gap-9">
        {compressedProductData.map((item) => {
          return (
            <img
              key={item.id}
              loading="lazy"
              src={item.compressedImage}
              alt={item.link}
              className="w-5/6 h-auto"
            />
          );
        })}
      </div>
    </section>
  );
};

export default FollowUs;
