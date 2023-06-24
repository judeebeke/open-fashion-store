// import SectionTitle from "../UI/SectionTitle";

import { productsForYou } from "../../store/localdata";

const ProductPage = () => {
  return (
    <section className="mt-24">
      {productsForYou.map((item) => {
        return (
          <figure
            key={item.id}
            className={`flex flex-col justify-center items-center text-center pt-9`}
          >
            <img src={item.image} className="object-contain" alt={item.title} />
            <h5 className="w-4/6 text-body text-xl pt-1">{item.title}</h5>
            <p className="text-primary text-2xl">&#x24;{item.price}</p>
          </figure>
        );
      })}
    </section>
  );
};

export default ProductPage;
