import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

import productOne from "../assets/product/Product1.jpg";
import productTwo from "../assets/product/Product2.jpg";
import productThree from "../assets/product/Product3.jpg";
import productFour from "../assets/product/Product4.png";

import productFive from "../assets/product/Product5.png";
import productSix from "../assets/product/Product6.jpg";
import productSeven from "../assets/product/Product7.png";
import productEight from "../assets/product/Product8.jpg";

import brandOne from "../assets/brand/Prada.png";
import brandTwo from "../assets/brand/Boss.png";
import brandThree from "../assets/brand/Gucci.png";
import brandFour from "../assets/brand/Burberry.png";
import brandFive from "../assets/brand/Catier.png";
import brandSix from "../assets/brand/Tiffany&Co.png";

import icon1 from "../assets/openfashion/icon1.png";
import icon2 from "../assets/openfashion/icon2.png";
import icon3 from "../assets/openfashion/icon3.png";
import icon4 from "../assets/openfashion/icon4.png";

import group1 from "../assets/followus/Group1.png";
import group2 from "../assets/followus/Group2.png";
import group3 from "../assets/followus/Group3.png";
import group4 from "../assets/followus/Group4.png";

export const brands = [
  { image: brandOne, title: "Prada", id: "br1" },
  { image: brandThree, title: "Gucci", id: "br3" },
  { image: brandSix, title: "Tiffany & Co", id: "br6" },
  { image: brandFour, title: "Burberry", id: "br4" },
  { image: brandTwo, title: "Boss", id: "br2" },
  { image: brandFive, title: "Catier", id: "br5" },
];

export const productsForYou = [
  {
    image: productFive,
    title: "21WN Reversible Wankadan Cardigan",
    price: "120",
    id: "pr2",
  },
  {
    image: productSix,
    title: "Cashmere Blend Cropped Jacket S1AW1WN-AM943",
    price: "120",
    id: "pr4",
  },
  {
    image: productSeven,
    title: "Harris Tweed Three Button Jacket",
    price: "120",
    id: "pr1",
  },
  {
    image: productEight,
    title: "Cashmere Blend Cropped Jacket S1AW1WN-AM943",
    price: "120",
    id: "pr3",
  },
  {
    image: productOne,
    title: "21WN Reversible Wankadan Cardigan",
    price: "120",
    id: "pr5",
  },
  {
    image: productTwo,
    title: "Oblong",
    price: "120",
    id: "pr6",
  },
  {
    image: productThree,
    title: "21WN Reversible Angora Cardigan",
    price: "120",
    id: "pr7",
  },
  {
    image: productFour,
    title: "21WN Reversible Pandra Cardigan",
    price: "120",
    id: "pr8",
  },
];

export const trendingTags = [
  "2023",
  "spring",
  "collection",
  "fall",
  "dress",
  "autumncollection",
  "fashion",
];

export const openFashionInfo = [
  { icon: icon4, info: "Fast shipping. Free on orders over $25.", id: "opi1" },
  {
    icon: icon2,
    info: "Unique designs and high-quality materials.",
    id: "opi2",
  },
  {
    icon: icon3,
    info: "Sustainable process from start to finish.",
    id: "opi3",
  },
  { icon: icon1, info: "Fast shipping. Free on orders over $25..", id: "opi4" },
];

export const followUs = [
  { image: group1, link: "@mia", id: "gr1" },
  { image: group2, link: "@jihyn", id: "gr2" },
  { image: group3, link: "@mia", id: "gr3" },
  { image: group4, link: "@jihyn", id: "gr4" },
];

export const socialIcons = [
  { icon: <AiFillInstagram />, id: "icon1" },
  { icon: <AiFillTwitterSquare />, id: "icon2" },
  { icon: <AiFillYoutube />, id: "icon3" },
];

export const footerLinks = [
  { link: "about", id: "link1" },
  { link: "contact", id: "link2" },
  { link: "blog", id: "icon3" },
];

export const blogPost = [
  {
    title: "Essential Wardrobe Staples: 5 Must-Haves for Every Fashionista",
    post: "In this blog post, we'll explore the five key clothing items that every fashion lover should have in their wardrobe. From a versatile little black dress to a well-fitted pair of jeans, we'll discuss why these staples are essential and how they can be styled for various occasions. Discover how these timeless pieces can form the foundation of a stylish and functional wardrobe.",
    tag: "deskofglass",
    author: "open Fashion",
    date: "27th May 2021",
  },

  {
    title: "Accessorize Like a Pro: Elevate Your Outfits with These Tips",
    post: "Accessories have the power to transform any outfit, and in this blog post, we'll share expert tips on how to accessorize like a pro. From statement necklaces to scarves and belts, we'll discuss different accessory types and offer practical advice on how to mix and match them to elevate your outfits. Learn how to create eye-catching combinations and express your personal style through accessories.",
    tag: "fashionbag",
    author: "open Fashion",
    date: "15th July 2022",
  },
  {
    title: "Fashion Color Trends: Hottest Colors of the Season",
    post: "Stay up to date with the latest color trends in the fashion world. In this blog post, we'll showcase the hottest colors of the season and explain how they can add a fresh and modern touch to your wardrobe. From vibrant hues to sophisticated neutrals, we'll explore how to incorporate these colors into your outfits and provide styling inspiration for different fashion preferences.",
    tag: "ladyonthefloor",
    author: "open Fashion",
    date: "24th May 2022",
  },
  {
    title: "Dress for Success: Boost Your Confidence with Fashion",
    post: "Your clothing choices can have a significant impact on your confidence and self-esteem. In this blog post, we'll delve into the psychology of dressing for success and explore how certain clothing styles and colors can boost your confidence in various situations. Discover the power of dressing intentionally and learn practical tips for leveraging fashion to enhance your self-assurance.",
    tag: "manwithflower",
    author: "open Fashion",
    date: "3rd January 2023",
  },
  {
    title: "Sustainable Fashion: Embrace Eco-Friendly Style",
    post: "As environmental awareness grows, sustainable fashion has become increasingly important. In this blog post, we'll dive into the world of eco-friendly fashion and discuss the importance of conscious consumerism. From ethical clothing brands to eco-conscious materials, we'll explore how you can make sustainable fashion choices without compromising on style. Learn about the positive impact of embracing eco-friendly style and discover practical ways to incorporate sustainability into your wardrobe.",
    tag: "womaninsuit",
    author: "open Fashion",
    date: "22nd February 2023",
  },
  {
    title: "Timeless Style Icons: Fashion Inspiration Through the Decades",
    post: "Take a journey through fashion history in this blog post as we explore timeless style icons from different decades. From Audrey Hepburn's elegant simplicity to Madonna's bold and iconic fashion statements, we'll showcase influential figures who have left a lasting impact on the world of fashion. Gain inspiration from their unique styles and learn how to incorporate elements of their fashion sensibilities into your own wardrobe.",
    tag: "womanwithbag",
    author: "open Fashion",
    date: "19th May 2023",
  },
];

export const blogTags = ["Fashion", "Promo", "Policy", "Lookbook", "sale"];

export const menNavLinks = [
  {
    subtitle: "new",
    submenu: [
      {
        navLinksRef: "men_all",
        navLinkText: "Men New",
      },
      {
        navLinksRef: "men_lookbook",
        navLinkText: "Summer lookbook",
      },
      {
        navLinksRef: "men_all",
        navLinkText: "Shop by Product",
      },
      {
        navLinksRef: "men_hoodiessweatshirts",
        navLinkText: "Hoodies & Sweatshirts",
      },
      {
        navLinksRef: "Smen_blazerssuits",
        navLinkText: "Suits & Blazers",
      },
      {
        navLinksRef: "men_sport",
        navLinkText: "Sportswear",
      },
      {
        navLinksRef: "men_underwear",
        navLinkText: "Underwear",
      },
      {
        navLinksRef: "men_trousers",
        navLinkText: "Trousers",
      },
    ],
  },
  {
    subtitle: "apparel",
    submenu: [
      {
        navLinksRef: "men_tshirtstanks",
        navLinkText: "T-shirts & Tanks",
      },
      {
        navLinksRef: "men_tshirtstanks_shortsleeve",
        navLinkText: "T-shirts",
      },
      {
        navLinksRef: "men_tshirtstanks_longsleeve",
        navLinkText: "Long Sleeves",
      },
    ],
  },
  {
    subtitle: "accessories",
    submenu: [
      {
        navLinksRef: "men_accessories_bags",
        navLinkText: "Bags",
      },
      {
        navLinksRef: "men_accessories_sunglasses",
        navLinkText: "Sunglasses",
      },
      {
        navLinksRef: "men_accessories_jewellery",
        navLinkText: "Jewelery",
      },
      {
        navLinksRef: "men_accessories",
        navLinkText: "Men Accessories",
      },
      {
        navLinksRef: "men_accessories_ties_bowties_handkerchiefs",
        navLinkText: "Ties, Bow tie & Handkerchiefs",
      },
      {
        navLinksRef: "men_accessories_beltsandbraces",
        navLinkText: "Belts and Suspenders",
      },
    ],
  },
  {
    subtitle: "Shoes",
    submenu: [
      {
        navLinksRef: "Link Shoes 1",
        navLinkText: "link Shoes",
      },
    ],
  },
  {
    subtitle: "Beauty",
    submenu: [
      {
        navLinksRef: "beauty_all",
        navLinkText: "link Beauty",
      },
    ],
  },
];

export const kidsNavLinks = [
  {
    subtitle: "new",
    submenu: [
      {
        navLinksRef: "kids_all",
        navLinkText: "Kids new",
      },
      {
        navLinksRef: "kids_boys_viewall",
        navLinkText: "Boys (2-8Y)",
      },
      {
        navLinksRef: "kids_girls_viewall",
        navLinkText: "Kids Girls",
      },
      {
        navLinksRef: "kids_girls_viewall",
        navLinkText: "Girls (2-8Y)",
      },
      {
        navLinksRef: "kids_oldergirls_viewall",
        navLinkText: "Girls (9-14Y)",
      },
      {
        navLinksRef: "kids_olderboys_viewall",
        navLinkText: "Boys (9-14Y)",
      },
    ],
  },
  {
    subtitle: "apparel",
    submenu: [
      {
        navLinksRef: "kids_newbornbaby_viewall",
        navLinkText: "Baby",
      },
      {
        navLinksRef: "kids_new_born_viewall",
        navLinkText: "Newborn",
      },
      {
        navLinksRef: "kids_baby_girl_viewall",
        navLinkText: "link apparel",
      },
      {
        navLinksRef: "Baby Boy",
        navLinkText: "kids_baby_boy_viewall",
      },
      {
        navLinksRef: "Shop by Product",
        navLinkText: "kids_newbornbaby_viewall",
      },
    ],
  },
];

export const womenNavLinks = [
  {
    subtitle: "new",
    submenu: [
      {
        navLinksRef: "beauty_all",
        navLinkText: "Beauty",
      },
      {
        navLinksRef: "ladies_all",
        navLinkText: "Popular Now",
      },
      {
        navLinksRef: "ladies_divided",
        navLinkText: "Dress",
      },
      {
        navLinksRef: "kids_all",
        navLinkText: "Kids",
      },
      {
        navLinksRef: "kids_girls_viewall",
        navLinkText: "Girls (2-8Y)",
      },
      {
        navLinksRef: "sportswear",
        navLinkText: "Sport",
      },
      {
        navLinksRef: "ladies_linen",
        navLinkText: "Linen Layers",
      },
      {
        navLinksRef: "ladies_dresses",
        navLinkText: "Dresses",
      },
      {
        navLinksRef: "Tops",
        navLinkText: "ladies_tops",
      },
    ],
  },
  {
    subtitle: "apparel",
    submenu: [
      {
        navLinksRef: "beauty_all",
        navLinkText: "Gift Guide",
      },
      {
        navLinksRef: "beauty_all",
        navLinkText: "Beauty",
      },
      {
        navLinksRef: "sportswear",
        navLinkText: "Sport",
      },
      {
        navLinksRef: "ladies_divided",
        navLinkText: "Dress",
      },
      {
        navLinksRef: "Blazers & Vests",
        navLinkText: "ladies_blazerswaistcoats",
      },
    ],
  },
  {
    subtitle: "Bag",
    submenu: [
      {
        navLinksRef: "Link Bag 1",
        navLinkText: "Gucci Bag",
      },
      {
        navLinksRef: "Link Bag 2",
        navLinkText: "L/V Bag",
      },
      {
        navLinksRef: "Link Bag 3",
        navLinkText: "GG Bag",
      },
      {
        navLinksRef: "Link Bag 4",
        navLinkText: "DG Bag",
      },
    ],
  },
  {
    subtitle: "Shoes",
    submenu: [
      {
        navLinksRef: "ladies_shoes",
        navLinkText: "Shoes",
      },
      {
        navLinksRef: "ladies_shoes_heels",
        navLinkText: "Heels",
      },
      {
        navLinksRef: "ladies_shoes_ballerinas",
        navLinkText: "Ballet Pumps",
      },
      {
        navLinksRef: "ladies_shoes_rainboots",
        navLinkText: "Rain Boots",
      },
      {
        navLinksRef: "ladies_shoes_pumps",
        navLinkText: "Pumps",
      },
      {
        navLinksRef: "ladies_shoes_espandrilles",
        navLinkText: "Espadrilles",
      },
    ],
  },
  {
    subtitle: "Beauty",
    submenu: [
      {
        navLinksRef: "beauty_all",
        navLinkText: "Cosmetics Beauty",
      },
      {
        navLinksRef: "beauty_all",
        navLinkText: "Eye Pencil Beauty",
      },
      {
        navLinksRef: "beauty_all",
        navLinkText: "Powder Beauty",
      },
      {
        navLinksRef: "beauty_all",
        navLinkText: "Mirrors Beauty",
      },
    ],
  },
  {
    subtitle: "Accessories",
    submenu: [
      {
        navLinksRef: "Link Accessories 1",
        navLinkText: "Watch Accessories",
      },
      {
        navLinksRef: "ladies_jumpsuits",
        navLinkText: "Jumpsuits, Rompers & Overalls",
      },
      {
        navLinksRef: "Link Accessories 3",
        navLinkText: "Necklaces Accessories",
      },
      {
        navLinksRef: "Link Accessories 4",
        navLinkText: "Waist Beads Accessories",
      },
      {
        navLinksRef: "Link Accessories 5",
        navLinkText: "Ankle Beads Accessories",
      },
    ],
  },
];

export const MenuNavTag = [
  {
    menu: "women",
    id: "ladies_all",
  },
  {
    menu: "men",
    id: "men_all",
  },
  {
    menu: "kids",
    id: "kids_all",
  },
];
