import SectionTitle from "./UI/SectionTitle";
import aboutImage from "../assets/about.jpg";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <main className="mt-20 px-5">
      <SectionTitle titletext="OUR STORY" />
      <p className="mt-7">
        Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can
        open{" "}
        <a
          className="text-primary hover:text-secondary"
          href="https://www.figma.com/file/a8vdmP9srDUXpCAD7ddSmQ/Open-Fashion---Free-eCommerce-UI-Kit-(Community)?type=design&node-id=844-2317&mode=design&t=9wM5ZN3WfWgzLI4A-0"
          target="_blank"
          rel="noreferrer"
        >
          Open Fashion - Free Ecommerce UI Kit file by Figma
        </a>
        .
        <br />
        <br />
        Create stunning shop with bulletproof guidelines and thoughtful
        components. Its library contains more than 50+ components supporting
        Light & Dark Mode and 60+ ready to use mobile screens.
      </p>
      <img
        src={aboutImage}
        className="w-full h-auto object-cover mt-5"
        alt="Woman resting on a table"
        loading="lazy"
      />
      <Footer />
    </main>
  );
};

export default AboutUs;
