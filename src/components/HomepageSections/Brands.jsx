import { useEffect } from "react";
import { brands } from "../../store/localdata";
import SectionTitle from "../UI/SectionTitle";
import useImageResizer from "../Utils/useImageResizer";

const Brands = () => {
  const { compressedProductData, imagesCompressor: productImagesCompressor } =
    useImageResizer();

  useEffect(() => {
    productImagesCompressor(brands);
  }, [productImagesCompressor]);

  return (
    <section className="flex flex-col justify-center items-center gap-y-9 px-6 py-12 lg:px-12">
      <SectionTitle />
      <div className="flex flex-wrap gap-x-5 gap-y-8 justify-center align-middle items-center md:gap-x-9">
        {compressedProductData.map((item) => {
          return (
            <figure key={item.id} className="w-24 text-center">
              <img
                src={item.compressedImage}
                loading="lazy"
                className="w-full object-contain"
                alt={item.title}
              />
            </figure>
          );
        })}
      </div>
      <SectionTitle />
    </section>
  );
};

export default Brands;
