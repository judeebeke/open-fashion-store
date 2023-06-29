import { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { json } from "react-router-dom";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebase/firebase";

const Recommend = (props) => {
  const [currentImage, setCurrentImage] = useState([]);

  let suggestedData = props;
  let currentSubCate = localStorage.getItem("product-subcategory");
  let currentCate = localStorage.getItem("product-category");

  const loader = useCallback(async () => {
    try {
      const storageRef = ref(storage, `${currentCate}/${currentSubCate}`);

      const response = await listAll(storageRef);
      const data = response.items;

      const imageGetter = await Promise.all(
        data.map(async (item) => {
          const url = await getDownloadURL(item);
          const currentUrl = { imageUrl: url, imageName: item.name };

          return currentUrl;
        })
      );
      setCurrentImage(imageGetter);
    } catch (error) {
      throw json(
        { message: null },
        { status: 500, statusText: "Could not get requested post!" }
      );
    }
  }, [currentSubCate, currentCate]);

  useEffect(() => {
    loader();
  }, [loader]);

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      {suggestedData.suggestedData.map((item) => {
        return (
          <figure
            key={item.id || item.version}
            className={`flex flex-col justify-center items-center text-center pt-9`}
          >
            {currentImage.map((items) => {
              return (
                items.imageName.includes(item.description) && (
                  <img
                    src={items.imageUrl}
                    className="object-contain"
                    alt={items.title}
                  />
                )
              );
            })}

            <Link
              to={`/product/productdetails/${item.version}`}
              className={`flex flex-col justify-center items-center text-center `}
            >
              <h5 className="w-4/6 text-body text-xl pt-1">
                {item.description}
              </h5>
              <p className="text-primary text-2xl">{item.price}</p>
            </Link>
          </figure>
        );
      })}
    </section>
  );
};

Recommend.proptypes = {
  suggestedData: PropTypes.array,
};

export default Recommend;
