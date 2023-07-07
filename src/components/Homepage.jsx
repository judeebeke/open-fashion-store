import { useRouteLoaderData, useLoaderData } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

import NewArrival from "./HomepageSections/NewArrival";
import Brands from "./HomepageSections/Brands";
import Collection from "./HomepageSections/Collection";
import { trendingTags } from "../store/localdata";

import Button from "./UI/Button";
import { flexCenter } from "../style";
import Product from "./HomepageSections/Product";
import Trending from "./UI/Trending";
import OpenFashion from "./HomepageSections/OpenFashion";
import FollowUs from "./HomepageSections/FollowUs";
import Footer from "./Footer";

const Homepage = () => {
  const offerData = useRouteLoaderData("for-you");
  const newArrival = useLoaderData();

  return (
    <>
      <section className="hero-image">
        <h1 className="flex flex-col hero-text text-3xl md:text-4xl  text-label text-left">
          LUXURY<span className="pl-4">FASHION</span>
          <span className={`${flexCenter} flex-row`}>&ACCESSORIES</span>
        </h1>
        <Button
          btnstyle={`w-4/5 md:auto lg:w-2/5 h-auto bg-body opacity-70 text-base md:text-xl text-offwhite hero-btn ${flexCenter} gap-x-3 py-3 px-3 rounded-full hover:bg-label hover:text-offwhite transition-all duration-500 ease-in-out`}
          to="/"
        >
          <i className="text-offwhite">
            <BsSearch />
          </i>
          EXPLORE COLLECTION
        </Button>
      </section>
      <main>
        <NewArrival newArrivalData={newArrival} />
        <Brands />
        <Collection />
        <Product offerData={offerData} />
        <Trending tagList={trendingTags} tagsTitle="TRENDING" />
        <OpenFashion />
        <FollowUs />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
