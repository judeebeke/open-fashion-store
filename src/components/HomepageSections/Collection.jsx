import { useEffect } from "react";
import useImageResizer from "../Utils/useImageResizer";

import { AiFillPlayCircle } from "react-icons/ai";
import collectionOne from "../../assets/collection/image1.png";
import collectionTwo from "../../assets/collection/image2.jpg";
import collectionThree from "../../assets/collection/image3.jpg";
import { flexCenter } from "../../style";

const Collection = () => {
  const {
    compressedProductData: compressedCollectionOneImage,
    imageCompressor: compressCollectionOneImage,
  } = useImageResizer();
  const {
    compressedProductData: compressedCollectionTwoImage,
    imageCompressor: compressCollectionTwoImage,
  } = useImageResizer();
  const {
    compressedProductData: compressedCollectionThreeImage,
    imageCompressor: compressCollectionThreeImage,
  } = useImageResizer();

  useEffect(() => {
    compressCollectionOneImage(collectionOne);
    compressCollectionTwoImage(collectionTwo);
    compressCollectionThreeImage(collectionThree);
  }, [
    compressCollectionOneImage,
    compressCollectionTwoImage,
    compressCollectionThreeImage,
  ]);
  return (
    <section className={`${flexCenter} flex-col py-12`}>
      <h2 className="text-2xl mb-6">COLLECTION</h2>
      <figure className="collection-ad1">
        <img
          src={compressedCollectionOneImage}
          className="w-full h-auto object-contain"
          loading="lazy"
          alt="Woman sooking side ways"
        />
        <div className="col-text">
          <p className="col-text-num">
            <strong>
              <em>10</em>
            </strong>
          </p>
          <h3 className="col-text-mon">October</h3>
          <h2 className="col-text-col">COLLECTION</h2>
        </div>
      </figure>
      <figure className="collection-ad2">
        <img
          src={compressedCollectionTwoImage}
          className="w-4/5 h-auto object-contain"
          loading="lazy"
          alt="Foot of a sitting lady in dress"
        />
        <div className="col2-text">
          <h3 className="col2-text-sea">Autumn</h3>
          <h2 className="col2-text-col">COLLECTION</h2>
        </div>
      </figure>
      <div className="collection-ad3 mt-4">
        <img
          src={compressedCollectionThreeImage}
          className="w-full h-auto object-contain"
          loading="lazy"
          alt="Nice View of a Table"
        />
        <a
          href="https://www.youtube.com"
          className="col3-text"
          role="button"
          aria-label="PLAY-BUTTON"
        >
          <AiFillPlayCircle />
        </a>
      </div>
    </section>
  );
};

export default Collection;
