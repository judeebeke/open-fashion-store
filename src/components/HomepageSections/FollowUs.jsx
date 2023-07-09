import { AiOutlineInstagram } from "react-icons/ai";
import { followUs } from "../../store/localdata";

const FollowUs = () => {
  return (
    <section className="flex justify-center items-center text-center flex-col py-12 px-6">
      <h2 className="text-2xl text-body uppercase">FOLLOW US</h2>
      <i className="text-3xl text-body py-4">
        <AiOutlineInstagram />
      </i>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-9">
        {followUs.map((item) => {
          return (
            <img key={item.id} loading="lazy" src={item.img} alt={item.link} />
          );
        })}
      </div>
    </section>
  );
};

export default FollowUs;
