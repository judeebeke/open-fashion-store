import { brands } from "../../store/localdata";
import SectionTitle from "../UI/SectionTitle";

const Brands = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-9 px-6 py-12 lg:px-12">
      <SectionTitle />
      <div className="flex flex-wrap gap-x-5 gap-y-8 justify-center align-middle items-center md:gap-x-9">
        {brands.map((item) => {
          return (
            <figure key={item.id} className="w-24 text-center">
              <img
                src={item.image}
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
