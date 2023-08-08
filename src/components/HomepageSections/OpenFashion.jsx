import logo from "../../assets/logo.png";
import signature from "../../assets/openfashion/icon5.png";
import { openFashionInfo } from "../../store/localdata";
import { flexCenter } from "../../style";
import SectionTitle from "./../UI/SectionTitle";

const OpenFashion = () => {
  const titleElem = (
    <>
      <img src={logo} alt="Open Fashion Logo" loading="lazy" />
      <p className="my-4 text-center">
        Making a luxurious lifestyle accessible for a generous group of women is
        our daily drive.
      </p>
    </>
  );

  return (
    <section className={`bg-inputbg px-6 py-12 ${flexCenter} flex-col`}>
      <SectionTitle titleElement={titleElem} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 text-center pt-9">
        {openFashionInfo.map((item) => {
          return (
            <figure key={item.id} className={`${flexCenter} gap-3 flex-col`}>
              <img
                src={item.icon}
                loading="lazy"
                alt={`Open Fashion Icon that displays ${item.info}`}
              />
              <p>{item.info}</p>
            </figure>
          );
        })}
      </div>
      <img src={signature} className="pt-5 w-24" alt="Rope Art" />
    </section>
  );
};

export default OpenFashion;
