import { brands } from "../../store/localdata";
import SectionTitle from "../UI/SectionTitle";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-9 px-6 py-12 lg:px-12">
      <SectionTitle />
      <div className="flex flex-wrap gap-x-5 gap-y-8 justify-center align-middle items-center md:gap-x-9">
        {brands.map((item) => {
          return (
            <motion.figure
              key={item.id}
              className="w-24 text-center"
              initial={{ rotate: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                rotate: [180, 0],
              }}
              transition={{
                type: "spring",
                stiffness: 50,
              }}
            >
              <img
                src={item.image}
                className="w-full object-contain cursor-pointer"
                alt={item.title}
              />
            </motion.figure>
          );
        })}
      </div>
      <SectionTitle />
    </section>
  );
};

export default Brands;
