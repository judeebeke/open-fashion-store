import { Fragment } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import SectionTitle from "../UI/SectionTitle";
import { flexCenter } from "./../../style";
import Button from "../UI/Button";
import Carousel from "../UI/Carousel";
import { newArrival } from "./../../store/localdata";

const NewArrival = () => {
  return (
    <Fragment>
      <section className={`${flexCenter} flex-col gap-y-9 py-10`}>
        <SectionTitle titletext="New Arrival" />
        <div className="flex self-start flex-col justify-between items-center px-14 md:px-20">
          <h2>APP</h2>
          <div className="semi-diamond bg-secondary"></div>
        </div>
      </section>
      <Carousel productData={newArrival} letDots={true} />
      <Button
        btnstyle={`${flexCenter} h-auto mx-auto w-[250px] md:w-[300px] gap-x-4 mt-6 rounded-full px-10 text-xl text-title py-3 hover:bg-label hover:text-offwhite transition-all duration-500 ease-in-out`}
        to="/"
      >
        Explore More
        <AiOutlineArrowRight />
      </Button>
    </Fragment>
  );
};

export default NewArrival;
