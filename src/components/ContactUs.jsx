import { flexCenter } from "../style";
import SectionTitle from "./UI/SectionTitle";
import Button from "./UI/Button";
import { aboutUs } from "../store/localdata";
import Footer from "./Footer";
import ScrollToTop from "./Utils/ScrollToTop";

const ContactUs = () => {
  return (
    <>
      <ScrollToTop />
      <main className="mt-20 px-6">
        <SectionTitle titletext="CONTACT US" />

        {aboutUs.map((item) => {
          return (
            <div
              key={item.id}
              className={`${flexCenter} flex-col mt-6 gap-y-3`}
            >
              <i className="text-4xl">{item.icon}</i>
              <p>{item.description}</p>
              {item.btnText && (
                <Button
                  btnstyle={`w-auto h-auto bg-title text-base mb-8 md:text-normal text-offwhite ${flexCenter} gap-x-3 py-3 px-3 hover:bg-label hover:text-offwhite transition-all duration-500 ease-in-out`}
                  to={"/"}
                >
                  {item.btnText}
                </Button>
              )}
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
