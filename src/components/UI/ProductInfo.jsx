import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ProductInfo = (props) => {
  let {
    itemCode,
    itemImage,
    itemImageBlob,
    itemName,
    itemPrice,
    getImageCodeHandler,
  } = props;
  return (
    <>
      <figure
        key={itemCode}
        className={`flex flex-col w-2/5 justify-center items-center mx-auto text-center pt-9`}
      >
        <img
          src={itemImageBlob}
          className="w-full h-auto object-contain"
          alt={itemName}
        />

        <Link
          to={`/product/productdetails/${itemCode}`}
          className={`flex flex-col justify-center items-center text-center`}
          onClick={() => {
            getImageCodeHandler(itemImage, itemCode);
          }}
        >
          <h5 className="w-4/6 text-body text-lg pt-1">{itemName}</h5>
          <p className="text-primary text-xl">{itemPrice}</p>
        </Link>
      </figure>
    </>
  );
};

ProductInfo.propTypes = {
  itemCode: PropTypes.string,
  itemImage: PropTypes.string,
  itemImageBlob: PropTypes.string,
  itemName: PropTypes.string,
  itemPrice: PropTypes.string,
  getImageCodeHandler: PropTypes.func,
};

export default ProductInfo;
