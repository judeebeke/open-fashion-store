import { Fragment } from "react";
import productImage from "../../assets/product/Product1.jpg";
import Button from "../UI/Button";
import { flexCenter } from "../../style";

const ProductDetails = () => {
  return (
    <Fragment>
      <main className="mt-20 flex flex-col">
        <img
          src={productImage}
          className="mx-auto w-full h-auto lg:w-1/3 object-cover px-5"
          alt="PRODUCT ONE DISPLAY"
        />
        <span className="px-5 py-5 flex flex-col gap-y-2 lg:text-center">
          <h3 className="text-xl">MOHAN</h3>
          <p className="text-lg">Recycle Boucle Knit Cardigan Pink</p>
          <p className="text-lg text-secondary">$120</p>
        </span>
        {/* <span><span></span></span> */}
        <Button
          btnstyle={`mx-auto w-full md:w-3/5 mb-5 md:h-10 bg-title text-offwhite text-center ${flexCenter}`}
        >
          ADD TO CART
        </Button>
        <div className="flex flex-col px-5 gap-y-5 lg:gap-y-0 lg:gap-x-5">
          <div className="flex flex-col flex-wrap">
            <h4 className="text-lg mb-2">Materials</h4>
            <p className="flex flex-wrap text-base leading-8">
              We work with monitoring programmes to ensure compliance with
              safety, health and quality standards for our products.
            </p>
          </div>
          <div>
            <h4 className="text-lg  mb-2">Care</h4>
            <p className="flex flex-wrap text-base leading-8">
              To keep your jackets and coats clean, you only need to freshen
              them up and go over them with a cloth or a clothes brush. If you
              need to dry clean a garment, look for a dry cleaner that uses
              technologies that are respectful of the environment.
              <ul className="flex flex-col gap-y-2 mt-3 text-base ">
                <li>Do not use Bleach</li>
                <li>Iron at a maximum of 110ºC/230ºF</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="px-5 my-5">
          <h5 className="text-lg  mb-2">Delivery</h5>
          <p className="flex flex-wrap text-base">
            <span className="text-lg leading-8">Free Flat Rate Shipping</span>
            Estimated to be delivered 12/06/23 - 19/06/23
          </p>
        </div>
        <h2 className="text-center text-2xl">You May Also Like</h2>
      </main>
    </Fragment>
  );
};

export default ProductDetails;
